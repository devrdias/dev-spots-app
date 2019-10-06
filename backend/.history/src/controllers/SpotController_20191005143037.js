module.exports = {
  async store(req,res) {
    console.log('body =', req.body);
    return res.json({ ok: true });
  }
}