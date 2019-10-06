module.exports = {
  async store(req,res) {
    console.debug(req.body);
    return res.json({ ok: true });
  }
}