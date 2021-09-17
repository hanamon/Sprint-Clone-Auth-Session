module.exports = {
  get: (req, res) => {
    // 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현한다.
    // 세션 객체에 담긴 정보는 req.session을 통해 확인할 수 있다.
    /*if( !req.session.userId ) {
      return res.status(400)
    }*/
    res.end()
  }
}
