/**
 * External dependencies
 */
import { act, screen } from '@testing-library/react';

const mockUnmount = jest.fn();

jest.mock( '../../index', () => {
	const { createElement, useEffect } = jest.requireActual( '@wordpress/element' );

	return function MockIsolatedBlockEditor() {
		useEffect( () => mockUnmount, [] );

		return createElement( 'div', null, 'Block editor' );
	};
} );

require( '../index' );

describe( 'browser editor lifecycle', () => {
	let textarea;

	beforeEach( () => {
		textarea = document.createElement( 'textarea' );
		textarea.style.display = 'inline-block';
		document.body.appendChild( textarea );
	} );

	afterEach( () => {
		act( () => window.wp.detachEditor( textarea ) );
		document.body.innerHTML = '';
		jest.clearAllMocks();
	} );

	it( 'attaches a React 18 root and hides the textarea', () => {
		act( () => window.wp.attachEditor( textarea ) );

		const editor = textarea.nextSibling;

		expect( editor ).toHaveClass( 'editor' );
		expect( screen.getByText( 'Block editor' ) ).toBeInTheDocument();
		expect( textarea ).not.toBeVisible();
	} );

	it( 'unmounts the root and restores the textarea on detach', () => {
		act( () => window.wp.attachEditor( textarea ) );
		const editor = textarea.nextSibling;

		act( () => window.wp.detachEditor( textarea ) );

		expect( mockUnmount ).toHaveBeenCalledTimes( 1 );
		expect( editor ).not.toBeInTheDocument();
		expect( textarea.style.display ).toBe( 'inline-block' );
	} );

	it( 'does nothing when detached more than once or before attachment', () => {
		expect( () => window.wp.detachEditor( textarea ) ).not.toThrow();

		act( () => window.wp.attachEditor( textarea ) );
		act( () => window.wp.detachEditor( textarea ) );
		expect( () => window.wp.detachEditor( textarea ) ).not.toThrow();

		expect( mockUnmount ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'creates a new root when reattached', () => {
		act( () => window.wp.attachEditor( textarea ) );
		act( () => window.wp.detachEditor( textarea ) );
		act( () => window.wp.attachEditor( textarea ) );

		expect( screen.getByText( 'Block editor' ) ).toBeInTheDocument();

		act( () => window.wp.detachEditor( textarea ) );

		expect( mockUnmount ).toHaveBeenCalledTimes( 2 );
		expect( textarea.style.display ).toBe( 'inline-block' );
	} );
} );
