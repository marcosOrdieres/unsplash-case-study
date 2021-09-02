type ImageState = {
    approved: Payload[];
    rejected: Payload[];
};

export type Payload = {
    id: number;
    url: string;
};

type Action = {
    type: string;
    approved: Payload[];
    rejected: Payload[];
};

export type GlobalState = {
    isImage: ImageState;
};

export const initialState: ImageState = {
    approved: [],
    rejected: [],
};

const isImageReducer = (state: ImageState = initialState, action: Action) => {
    switch (action.type) {
        case 'APPROVE_IMAGE':
            return {
                approved: state.approved.concat(action.approved),
                rejected: state.rejected,
            };
        case 'REJECT_IMAGE':
            return {
                approved: state.approved,
                rejected: state.rejected.concat(action.rejected),
            };
        default:
            return state;
    }
};

export default {
    isImage: isImageReducer,
};
