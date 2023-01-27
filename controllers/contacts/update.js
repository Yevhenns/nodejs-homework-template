const contactsOperations = require("../../models");

const update = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsOperations.update(contactId, req.body);
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = update;
