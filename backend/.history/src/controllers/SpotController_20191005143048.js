module.exports = {
  async store(req,res) {
    console.log('body =', req);
    return res.json({ ok: true });
  }
}