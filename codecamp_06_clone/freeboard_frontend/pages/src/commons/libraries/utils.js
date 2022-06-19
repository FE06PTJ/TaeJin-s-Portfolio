export const getDate = (date) => {
    const newDate = new Date(date)
    const yyyy = newDate.getFullYear()
    const mm = newDate.getMonth() + 1
    const dd = newDate.getDate()
    return `${yyyy}-${mm}-${dd}`
    //return으로 프레젠터의 {getDate(el.createdAt)}지우고 `${year}-${month}-${date}`를 써준다.
}
// 0000-00-00형태이므로 yyyy-mm-dd로 써준다.
//프레젠터에서 {getDate(el.createdAt)}가 넘어오면 설정해준 값으로 return을 해준다.