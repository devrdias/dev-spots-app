module.exports = {
  async store(req,res) {
    console.log('body =', eq.body);
    return res.json({ ok: true });
  }
}