const delay = (callback, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        }, ms)
        resolve(callback())
    })
}

export default delay;