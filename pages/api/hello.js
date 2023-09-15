const saludoHandler = async (req, res) => {
    res.status(200).json({ text: "Powered by Almeyda 🤨" });
}

export default saludoHandler;