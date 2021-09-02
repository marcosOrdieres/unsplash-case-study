import imageReducer, { initialState } from "../../reducers/imageReducer";

describe('imageReducer reducer', () => {
    it('should return the initial state', () => {
        const initialImageAction = {
            type: '',
            approved: [],
            rejected: [],
        };
        expect(imageReducer.isImage(undefined, initialImageAction)).toEqual(
            initialState
        );
    });

    it('should handle APPROVE_IMAGE', () => {
        const approveImageAction = {
            type: 'approved',
            approved: [{ id: 1, url: 'approved.com' }],
            rejected: [],
        };

        const previousState = {
            approved: [{ id: 1, url: 'approved.com' }],
            rejected: [],
        };

        expect(imageReducer.isImage(previousState, approveImageAction)).toEqual({
            approved: approveImageAction.approved,
            rejected: initialState.rejected,
        });
    });

    it('should handle REJECT_IMAGE', () => {
        const rejectImageAction = {
            type: 'rejected',
            approved: [],
            rejected: [{ id: 2, url: 'rejected.com' }],
        };

        const previousState = {
            approved: [],
            rejected: [{ id: 2, url: 'rejected.com' }],
        };

        expect(imageReducer.isImage(previousState, rejectImageAction)).toEqual({
            approved: initialState.approved,
            rejected: initialState.rejected.concat(rejectImageAction.rejected),
        });
    });
});
