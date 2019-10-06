module.exports = {
  async store(req,res) {
    console.log('body =', req.body);
    console.log('body =', req.file);
    return res.json({ ok: true });
  }
}