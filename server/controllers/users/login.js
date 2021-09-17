const { User } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { userId, password } = req.body;
    const userInfo = await User.findOne({ where: { userId, password } });

    // userInfo 결과 존재 여부에 따라 응답을 구현한다.
    if( !userInfo ) return res.status(400).send({ data: null, message: 'not authorized' });
    
    // 결과가 존재하는 경우 세션 객체에 userId가 저장되어야한다.
    req.session.save(() => {
      req.session.userId = userInfo.dataValues.userId;
      delete userInfo.dataValues.password;
      res.status(200).json({ data: userInfo, message: 'ok' });
    });
  }
}
