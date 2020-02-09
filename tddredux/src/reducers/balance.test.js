import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {

    const balance = 10;

    it('sets a balance', () => {
        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
    });


    describe('the re-initializing', () => {
        it('reads the balance from cookies', () => {
            expect(balanceReducer2(undefined, {})).toEqual(balance);
        })
    });

    it('adds a deposit', () => {

        const deposit = 20;
        expect(balanceReducer(balance, { type: constants.DEPOSIT, deposit })).toEqual(balance + deposit);
    });

    it('withraw - substracts from balance', () => {

        const withdraw = 10;

        expect(balanceReducer(balance, { type: constants.WITHDRAW, withdraw })).toEqual(balance - withdraw);
    });
});