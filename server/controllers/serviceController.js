import Service from '../models/Service.js';

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getServicesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const services = await Service.find({ category });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchServices = async (req, res) => {
  try {
    const { query } = req.query;
    const services = await Service.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};