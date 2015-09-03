export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.create("video", {
    id: 1,
    name: "Rick Astley",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=true&iv_load_policy=3",
    startSeconds: "0",
    ytid: "dQw4w9WgXcQ",
    imageName: "rick.jpg",
    slogan: "You got Rick Rolled in 2015!"
  });

  server.create("video", {
    id: 2,
    name: "Tay Zonday",
    url: "https://www.youtube.com/embed/EwTZ2xpQwpA?autoplay=true&start=10&iv_load_policy=3",
    startSeconds: "10",
    ytid: "EwTZ2xpQwpA",
    imageName: "tay.jpg",
    slogan: "You got Zondayed!"
  });

  server.create("video", {
    id: 3,
    name: "Epix Sax Guy",
    url: "https://www.youtube.com/embed/kxopViU98Xo?autoplay=true&iv_load_policy=3",
    startSeconds: "0",
    ytid: "kxopViU98Xo",
    imageName: "sax.jpg",
    slogan: "You got saxed!"
  });

}