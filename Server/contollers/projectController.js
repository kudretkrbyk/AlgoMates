const Project = require("../models/projects");
const { sanityFunction } = require("../middleware/sanityFunction");

const getAll = async (req, res) => {
  try {
    const response = await Project.findAll();
    console.log(response);
    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const addData = async (req, res) => {
  try {
    let { title, tag, description, image, liveview, github } = req.body;
    const s_title = sanityFunction(title);
    const s_tag = sanityFunction(tag);
    const s_description = sanityFunction(description);
    const s_image = sanityFunction(image);
    const s_liveview = sanityFunction(liveview);
    const s_github = sanityFunction(github);
    if (
      !s_title ||
      !s_tag ||
      !s_description ||
      !s_image ||
      !s_liveview ||
      !s_github
    ) {
      res.send({
        success: false,
        message: "lütfen geçerli veriler ile tekrar deneyiniz!!",
      });
    }

    const response = await Project.create({
      title: title,
      tag: tag,
      description: description,
      image: image,
      liveview: liveview,
      github: github,
    });

    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    if (!s_id) {
      res.send({ success: false, message: "lütfen geçerli bir id giriniz" });
    }

    const response = await Project.findByPk(id);
    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    let { title, tag, description, image, liveview, github } = req.body;
    const s_adisoyadi = sanityFunction(adiSoyadi);
    const s_tcKimlikNo = sanityFunction(tcKimlikNo);
    const s_telefon = sanityFunction(telefon);
    const s_adres = sanityFunction(adres);
    const s_referans = sanityFunction(referans);
    if (
      !s_id ||
      !s_adisoyadi ||
      !s_tcKimlikNo ||
      !s_telefon ||
      !s_adres ||
      !s_referans
    ) {
      res.send({
        success: false,
        message: "lütfen geçerli veriler ile tekrar deneyiniz!!",
      });
    }

    const response = await Project.update(
      {
        title: title,
        tag: tag,
        description: description,
        image: image,
        liveview: liveview,
        github: github,
      },
      {
        where: { id: id },
      }
    );
    if (response[0] === 0) {
      // Bu bir "iş kuralı" kontrolüdür (örneğin: böyle bir kayıt yok)
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    res.send({ success: true, message: ` id=${id}, değer güncellendi` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    if (!s_id) {
      res.send({ success: false, message: "lütfen geçerli bir id giriniz" });
    }

    const response = await Project.destroy({
      where: { id: id },
    });
    if (response === 0) {
      // Bu bir "iş kuralı" kontrolüdür (örneğin: böyle bir kayıt yok)
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }
    res.send({ success: true, message: ` id=${id}, değer silindi` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAll,
  deleteById,
  getById,
  addData,
  updateById,
};
