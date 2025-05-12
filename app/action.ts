"use server";

export type LikeState = {
    liked: boolean,
    bubble?: boolean,
    error?: string
  }
 export const setLikedAction = async (
    state: LikeState, 
    payload: LikeState)
    : Promise<LikeState> => {

    //pretend to be a server action, delay for 1 second and return data
    try {
      console.log('setLikedAction', state, payload);
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (payload.error) throw new Error();
      return { liked: !state.liked };
    } catch (e) {
      console.error(e);
      return { liked: state.liked, error: payload.error };
    }
  }
