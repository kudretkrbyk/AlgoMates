const Project = require("../models/projects");
const getAllProjects = async (req, res) => {
  try {
    const response = await Project.findAll();
    console.log(response[0]);
    res.send(response[0].dataValues);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = {
  getAllProjects,
};
// exports.get_project_delete = async (req, res) => {
//   const blogid = req.params.blogid;
//   try {
//     const blog = await Blog.findByPk(blogid);

//     res.render("admin/blog-delete", {
//       title: "Delete Blog",
//       blog: blog.dataValues,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.post_project_delete = async (req, res) => {
//   const blogid = req.body.blogid;
//   try {
//     //await db.execute("DELETE FROM blog where blogid=?", [blogid])
//     await Blog.destroy({ where: { id: blogid } });
//     res.redirect("/admin/blogs?action=delete&blogid=" + blogid);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_blog_edit = async (req, res) => {
//   const blogid = req.params.blogid;
//   try {
//     const blog = await Blog.findByPk(blogid);
//     const categories = await Category.findAll();

//     if (blog) {
//       return res.render("admin/blog-edit", {
//         title: blog.dataValues.title,
//         blog: blog.dataValues,
//         categories: categories,
//       });
//     }
//     res.redirect("/admin/blogs");
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.post_blog_edit = async (req, res) => {
//   const {
//     blogid: blogid,
//     baslik: title,
//     altbaslik: subTitle,
//     aciklama: description,
//     anasayfa,
//     onay,
//     kategori: categoryid,
//   } = req.body;
//   let image = req.body.resim;
//   if (req.file) {
//     image = req.file.filename;
//     fs.unlink("public/images/" + req.body.resim, (err) => {
//       if (err) console.log(err);
//     });
//   }

//   try {
//     await Blog.update(
//       {
//         title: title,
//         description: description,
//         image: image,
//         home_page: anasayfa == "on" ? 1 : 0,
//         approval: onay == "on" ? 1 : 0,
//         categoryId: categoryid,
//         subTitle: subTitle,
//       },
//       {
//         where: {
//           id: blogid,
//         },
//       }
//     );

//     res.redirect("/admin/blogs?action=edit&blogid=" + blogid);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_blog_list = async (req, res) => {
//   try {
//     const blogs = await Blog.findAll({
//       attributes: ["id", "title", "subTitle", "image"],
//       include: {
//         model: Category,
//         attributes: ["category_name"],
//       },
//     });
//     console.log(blogs);
//     res.render("admin/blog-list", {
//       title: "blog list",
//       blogs: blogs,
//       action: req.query.action,
//       blogid: req.query.blogid,
//       blogname: req.query.blogname,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_blog_create = async (req, res) => {
//   try {
//     // const [categories, ] = await db.execute("SELECT * FROM categories");
//     const categories = await Category.findAll();
//     res.render("admin/blog-create", {
//       title: "add blog",
//       categories: categories,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.post_blog_create = async (req, res) => {
//   const {
//     baslik: title,
//     altbaslik: subTitle,
//     aciklama: description,
//     anasayfa,
//     onay,
//     kategori: categoryid,
//   } = req.body;
//   const image = req.file.filename;
//   try {
//     await Blog.create({
//       title: title,
//       description: description,
//       image: image,
//       home_page: anasayfa == "on" ? 1 : 0,
//       approval: onay == "on" ? 1 : 0,
//       categoryId: categoryid,
//       subTitle: subTitle,
//     });
//     res.redirect("/admin/blogs?action=create&blogname=" + title);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_category_delete = async (req, res) => {
//   const categoryid = req.params.categoryid;
//   try {
//     //const [categories,]= await db.execute("SELECT * FROM categories where category_id=?", [categoryid])
//     //const category= categories[0];
//     const category = await Category.findByPk(categoryid);

//     res.render("admin/category-delete", {
//       title: "Delete Category",
//       category: category.dataValues,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.post_category_delete = async (req, res) => {
//   const categoryid = req.body.categoryid;
//   try {
//     //await db.execute("DELETE FROM categories where category_id=?", [categoryid])
//     await Category.destroy({ where: { id: categoryid } });
//     res.redirect("/admin/categories?action=delete&categoryid=" + categoryid);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_category_edit = async (req, res) => {
//   const categoryid = req.params.categoryid;
//   try {
//     const category = await Category.findByPk(categoryid);
//     const blogs = await category.getBlogs();
//     const blogCount = await category.countBlogs();
//     if (category) {
//       return res.render("admin/category-edit", {
//         title: "category edit",
//         category: category.dataValues,
//         blogs: blogs,
//         blogCount: blogCount,
//       });
//     }
//     res.redirect("/admin/categories");
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.post_category_edit = async (req, res) => {
//   const categoryid = req.body.categoryid;
//   const kategoriadi = req.body.categoryname;
//   try {
//     await Category.update(
//       { category_name: kategoriadi },
//       {
//         where: {
//           id: categoryid,
//         },
//       }
//     );
//     res.redirect("/admin/categories?action=edit&categoryid=" + categoryid);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_category_list = async (req, res) => {
//   try {
//     const categories = await Category.findAll();
//     res.render("admin/category-list", {
//       title: "category list",
//       categories: categories,
//       action: req.query.action,
//       categoryid: req.query.categoryid,
//       categoryname: req.query.categoryname,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.post_category_create = async (req, res) => {
//   const kategoriadi = req.body.categoryname;
//   try {
//     await Category.create({ category_name: kategoriadi });
//     res.redirect("/admin/categories?action=create&categoryname=" + kategoriadi);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_category_create = (req, res) => {
//   try {
//     res.render("admin/category-create", {
//       title: "add category",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.get_index = async (req, res) => {
//   try {
//     res.render("admin/admin-index", {
//       title: "admin index",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
