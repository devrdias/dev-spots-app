module.exports = {
  async store(req,res) {
    console.log(req.body);
    return res.json({ ok: true });
  }
}