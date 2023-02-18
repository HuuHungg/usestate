
import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'


export let setJob = payload => {
    return {
      type: SET_JOB,
      payload
    }
}

export let addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export let delete_job = payload => {
    return {
      type: DELETE_JOB,
      payload
    }
}

