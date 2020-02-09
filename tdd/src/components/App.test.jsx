import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import configureTests from './setupTests';


configureTests();


describe('App', () => {

    const app = shallow(<App/>);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the state', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe("When clicking add gift buttonn", () => {


        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate("click");
        });


        afterEach(() => {
            app.setState({ gifts: []});
        });

        it('adds a gift to statte when click', () => {

            expect(app.state().gifts).toEqual([{
                id: id
            }])
        });

        it('adds a new gift to the rendered list', () => {
            expect(app.find(".gift-list").children().length).toEqual(1);
        });

        it('cerates a Gift component', () => {
            expect(app.find("Gift").exists()).toBe(true);
        });

        describe('and user wants to remove gift', () => {
            beforeEach(() => {
                app.instance().handleRemoveGift(id);
            });

            it('removes the gift from state', () => {
                expect(app.state().gifts).toEqual([]);
            })

        });
    }); 

});