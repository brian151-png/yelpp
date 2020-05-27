import axios from 'axios';

export const linku = 'https://api.yelp.com/v3/businesses';

export const kagi = 'Bearer K9MoIETY1AsUS43FwXx3LgM8F6FVuV45wOiaOtfu0YlVTiupxZAEcfZWK_SM0Z2IAWUy8M0uBLBBISLmfpO2i6pb3f5e2IGKrGPPATv16WgVndpIkeC3Pvxle5ipXnYx';

export default axios.create({
    baseURL: linku,
    headers: {
        Authorization: kagi
    }
});

