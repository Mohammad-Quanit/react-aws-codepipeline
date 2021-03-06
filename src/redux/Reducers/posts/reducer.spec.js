import { types } from "../../Actions/types";
import postsReducer from "./reducer";

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postsReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('Should return new state if receving type', () => {
    const posts = [
      {title: 'Test 1'},
      {title: 'Test 2'},
      {title: 'Test 3'},
      {title: 'Test 4'},
      {title: 'Test 5'}
    ]
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    })
    console.log(newState)
    expect(newState).toEqual(posts)
  })
})
