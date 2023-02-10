"use client";

import React, { useEffect, useRef } from "react";
import "./video.css";
import videojs from "video.js";
import "./nuevo.js";
import { relatedList } from "./related.js";

const VideoJS = () => {
  const ref = useRef<any>();

  useEffect(() => {
    const videoJsOptions = {
      controls: true,
      preload: "auto",
      playsinline: "true",
      crossorigin: "anonymous",
      disableRemotePlayback: "true",
      poster: "https://cdnzone.nuevodevel.com/video/hls/tos/tearsd.jpg",
      sources: {
        src: "https://repository.paellaplayer.upv.es/belmar-multiresolution/media/480-presenter.mp4?fbclid=IwAR1k_rRfCQjBMecIThYv4JJKEMmX-rXimx7BYjMuSyKa8SvTm8or44JRyis",
        // type: "application/x-mpegURL",
      },
    };
    const nuevoOptions = {
      logo: "//cdn.nuevodevel.com/img/logo_small.png",
      logourl: "//www.nuevodevel.com/nuevo/order",
      related: relatedList,
    };

    // instantiate Video.js

    const player = videojs(
      ref.current,
      videoJsOptions,

      function onPlayerReady() {
        console.log("player ready");
      }
    );

    player.nuevo(nuevoOptions);
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div className="v-parent2">
      <div className="v-child">
        <video ref={ref} id="my-video" className="video-js vjs-fill" />
      </div>
    </div>
  );
};

export default VideoJS;
