module.exports = {
  async store(req,res) {
    console.log(r'body =', eq.body);
    return res.json({ ok: true });
  }
}