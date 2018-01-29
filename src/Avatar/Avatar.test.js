import 'react-native';
import React from 'react';
import Avatar from './Avatar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// must have a pic
// must have onClick method
// must

let tree,
    avatarProps;

const picExemple = require("./picExemple.jpg");

describe('Avatar', () => {

    
    
    describe('Smoth tests', () => {

        beforeAll(()=>{
            tree = renderer.create(
                <Avatar />
            );
        });
        
        test('renders correctly', () => {
            tree;
        });
        
    });
    
    describe('Props', () => {

        beforeAll(()=>{
            tree = renderer.create(
                <Avatar pic={picExemple} />
            );
            avatarProps = tree.toTree().props;
        });

        test('Must have pic prop', () => {
            expect(avatarProps.hasOwnProperty('pic')).toBe(true);
        });
        
        test('pic prop must be equal to what was passed by parameter', () => {
            expect(avatarProps.pic).toBe(picExemple);
        });

    });
});

