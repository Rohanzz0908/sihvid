const { isValidChannelName } = require("./utils");

const router = require("express").Router();

// Route: Home page
router.get("/", (req, res) => res.render("index", { page: "index", title: "Arogya Sahayak teleconsultation" }));

// Route: Room page (dynamic)
router.get("/:channel", (req, res) => {
        const channel = req.params.channel;
        if (!isValidChannelName(channel)) {
                return res.status(400).render("invalid", { page: "invalid-channel", title: "Invalid channel" });
        }

        res.render("channel", { page: "channel", title: channel });
});

// Route: Catch-all for 404 errors
router.use(["/*", "/404"], (req, res) => res.status(404).render("404", { page: "404", title: "Page not found" }));

module.exports = router;
