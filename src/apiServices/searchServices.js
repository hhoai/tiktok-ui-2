import * as request from "~/utils/request";

export const search = async (q, type = 'less') => {
  try {
    const res = request.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data
  } catch (err) {
    console.log(err);
  }
}
