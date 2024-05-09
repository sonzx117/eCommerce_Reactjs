import { SHOP_CART } from '../utils/constant';
import { addShopCartService, getAllShopCartByUserIdService } from '../services/userService';
import { toast } from 'react-toastify';


export const addItemCartStart = (data) => {
    return async (dispatch, getState) => {
        dispatch(getItemCartLoading());
        try {
            let res = await addShopCartService(data);

            if (res && res.errCode === 0) {

                dispatch(getItemCartStart(data.userId))
                dispatch(addItemCartSuccess())


            } else {
                dispatch(addItemCartFaild());
                toast.error(res.errMessage)
            }
        } catch (error) {
            dispatch(addItemCartFaild());

        }
    }
}

export const addItemCartSuccess = () => {
    return {
        type: SHOP_CART.ADD_ITEM_CART_SUCCESS,
    }
}
export const addItemCartFaild = () => {
    return {
        type: SHOP_CART.ADD_ITEM_CART_FAILD,
    }
}
export const getItemCartStart = (id) => {
    return async (dispatch, getState) => {
        dispatch(getItemCartLoading());
        try {
            let res = await getAllShopCartByUserIdService(id);
            if (res && res.errCode === 0) {
                const normalizedData = normalizeData(res?.data);
                dispatch(getItemCartSuccess(normalizedData));

            } else {
                dispatch(getItemCartFaild());
                toast.error(res.errMessage)

            }
        } catch (error) {
            dispatch(getItemCartFaild());
            toast.error("An error occurred while fetching cart items");

        }
    }
}
export const getItemCartSuccess = (data) => {
    return {
        type: SHOP_CART.GET_ITEM_CART_SUCCESS,
        data: data
    }
}
export const getItemCartFaild = () => {
    return {
        type: SHOP_CART.GET_ITEM_CART_FAILD,
    }
}
export const getItemCartLoading = () => {
    return {
        type: SHOP_CART.GET_ITEM_CART_LOADING,
    }
}
export const ChooseVoucherStart = (data) => {
    return {
        type: SHOP_CART.CHOOSE_VOUCHER_START,
        data: data
    }
}
export const ChooseTypeShipStart = (data) => {
    return {
        type: SHOP_CART.CHOOSE_TYPESHIP_START,
        data: data
    }
}
const normalizeData = (data) => {
    // Normalize data here
    return data;
}