import { jsxDEV } from "react/jsx-dev-runtime";
const { useState, useEffect, useRef, useMemo, useCallback } = React;
const { createRoot } = ReactDOM;
const room = new WebsimSocket();
const App = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    const initializeRoom = async () => {
      await room.initialize();
      setIsInitialized(true);
    };
    initializeRoom();
  }, []);
  const renderDemo = () => {
    switch (activeSection) {
      case "overview":
        return /* @__PURE__ */ jsxDEV(Overview, { onSelectDemo: setActiveSection }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 16
        });
      case "multiplayer":
        return /* @__PURE__ */ jsxDEV(MultiplayerDemo, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 16
        });
      case "gamedev":
        return /* @__PURE__ */ jsxDEV(GameDevDemo, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 27,
          columnNumber: 16
        });
      case "ai":
        return /* @__PURE__ */ jsxDEV(AIDemo, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 29,
          columnNumber: 16
        });
      case "dataViz":
        return /* @__PURE__ */ jsxDEV(DataVizDemo, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 31,
          columnNumber: 16
        });
      case "social":
        return /* @__PURE__ */ jsxDEV(SocialNetworkDemo, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 16
        });
      case "devEnv":
        return /* @__PURE__ */ jsxDEV(DevEnvironmentDemo, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 35,
          columnNumber: 16
        });
      default:
        return /* @__PURE__ */ jsxDEV(Overview, { onSelectDemo: setActiveSection }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 16
        });
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxDEV("section", { className: "hero", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "particles-container" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("h1", { children: "Websim: Beyond Imagination" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("p", { children: "Discover how Websim transcends traditional web development to become a versatile platform for creating games, tools, AI-powered applications, multiplayer experiences, and even custom development environments." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "nav-tabs", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "overview" ? "active" : ""}`,
            onClick: () => setActiveSection("overview"),
            children: "Overview"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 54,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "multiplayer" ? "active" : ""}`,
            onClick: () => setActiveSection("multiplayer"),
            children: "Multiplayer"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 60,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "gamedev" ? "active" : ""}`,
            onClick: () => setActiveSection("gamedev"),
            children: "Game Dev"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 66,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "ai" ? "active" : ""}`,
            onClick: () => setActiveSection("ai"),
            children: "AI Integration"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 72,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "dataViz" ? "active" : ""}`,
            onClick: () => setActiveSection("dataViz"),
            children: "Data Viz"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 78,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "social" ? "active" : ""}`,
            onClick: () => setActiveSection("social"),
            children: "Social Network"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 84,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: `tab ${activeSection === "devEnv" ? "active" : ""}`,
            onClick: () => setActiveSection("devEnv"),
            children: "Dev Env"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 90,
            columnNumber: 11
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 53,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("section", { className: "demo-container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "demo-header", children: [
        /* @__PURE__ */ jsxDEV("h2", { children: activeSection.charAt(0).toUpperCase() + activeSection.slice(1) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 101,
          columnNumber: 11
        }),
        activeSection !== "overview" && /* @__PURE__ */ jsxDEV("button", { className: "btn btn-primary", onClick: () => setActiveSection("overview"), children: "Back to Overview" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 103,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 100,
        columnNumber: 9
      }),
      isInitialized ? renderDemo() : /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: "Initializing..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 109,
        columnNumber: 41
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 99,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 42,
    columnNumber: 5
  });
};
const Overview = ({ onSelectDemo }) => {
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim is not just a tool for creating websites - it's a versatile platform for building any interactive digital experience you can imagine. Explore the demos below to see how Websim can be used to create games, tools, AI-powered applications, and more." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 119,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "showcase-grid", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", onClick: () => onSelectDemo("multiplayer"), children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-icon", children: "\u{1F310}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 127,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "card-content", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "Multiplayer Experiences" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 129,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("p", { children: "Create real-time collaborative applications with WebsimSocket. Share presence, room state, and build interactive multiplayer experiences." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 130,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 128,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 126,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", onClick: () => onSelectDemo("gamedev"), children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-icon", children: "\u{1F3AE}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 135,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "card-content", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "Game Development" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 137,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("p", { children: "Build interactive games with canvas, WebGL, or DOM-based rendering. Implement physics, controls, and game mechanics." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 138,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 136,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 134,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", onClick: () => onSelectDemo("ai"), children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-icon", children: "\u{1F916}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 143,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "card-content", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "AI Integration" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 145,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("p", { children: "Leverage built-in AI capabilities for image generation, text processing, creative content, and intelligent assistants." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 146,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 144,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 142,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", onClick: () => onSelectDemo("dataViz"), children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-icon", children: "\u{1F4CA}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 151,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "card-content", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "Data Visualization" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 153,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("p", { children: "Transform complex data into beautiful, interactive visualizations with canvas and SVG drawing capabilities." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 154,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 152,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 150,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", onClick: () => onSelectDemo("social"), children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-icon", children: "\u{1F4AC}" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 159,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "card-content", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "Social Networks" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 161,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("p", { children: "Build community platforms with persistent data storage, user profiles, posts, comments, and reactions." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 162,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 160,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 158,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", onClick: () => onSelectDemo("devEnv"), children: [
        /* @__PURE__ */ jsxDEV("div", { className: "card-icon", children: "\u2699\uFE0F" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 167,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "card-content", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "Development Environments" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 169,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("p", { children: "Create custom code editors, design tools, and development environments tailored to specific workflows." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 170,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 168,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 166,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 125,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 118,
    columnNumber: 5
  });
};
const MultiplayerDemo = () => {
  const [presence, setPresence] = useState({});
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const canvasRef = useRef(null);
  useEffect(() => {
    room.updatePresence({
      position,
      lastActive: (/* @__PURE__ */ new Date()).toISOString()
    });
    const unsubscribePresence = room.subscribePresence((currentPresence) => {
      setPresence(currentPresence);
    });
    room.onmessage = (event) => {
      const data = event.data;
      if (data.type === "chat") {
        setMessages((prev) => [...prev, {
          id: Date.now(),
          username: data.username,
          text: data.text,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }]);
      }
    };
    const renderCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Object.entries(presence).forEach(([clientId, data]) => {
        if (!data.position) return;
        const { x, y } = data.position;
        const isCurrentUser = clientId === room.clientId;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 15, y + 10);
        ctx.lineTo(x + 8, y + 15);
        ctx.closePath();
        ctx.fillStyle = isCurrentUser ? "#10b981" : "#f43f5e";
        ctx.fill();
        if (room.peers[clientId]) {
          ctx.font = "12px Arial";
          ctx.fillStyle = "white";
          ctx.fillText(room.peers[clientId].username, x, y - 5);
        }
      });
    };
    const animationFrame = setInterval(renderCanvas, 30);
    return () => {
      unsubscribePresence();
      clearInterval(animationFrame);
    };
  }, [position]);
  const handleCanvasMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };
  const sendMessage = () => {
    if (!message.trim()) return;
    room.send({
      type: "chat",
      text: message
    });
    setMessage("");
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Real-time Collaboration" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 276,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim enables real-time multiplayer experiences through WebsimSocket. Move your cursor on the canvas and chat with other visitors." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 277,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(
      "canvas",
      {
        ref: canvasRef,
        width: "100%",
        height: "300",
        className: "game-canvas",
        onMouseMove: handleCanvasMouseMove
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 282,
        columnNumber: 7
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "multiplayer-container", children: [
      /* @__PURE__ */ jsxDEV("h4", { children: "Active Users" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 291,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: Object.entries(room.peers).map(([clientId, peer]) => /* @__PURE__ */ jsxDEV("div", { className: "player-info", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: `https://images.websim.ai/avatar/${peer.username}`,
            alt: peer.username,
            className: "player-avatar"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 295,
            columnNumber: 15
          }
        ),
        /* @__PURE__ */ jsxDEV("span", { children: peer.username }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 300,
          columnNumber: 15
        })
      ] }, clientId, true, {
        fileName: "<stdin>",
        lineNumber: 294,
        columnNumber: 13
      })) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 292,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 290,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "message-container", children: messages.map((msg) => /* @__PURE__ */ jsxDEV("div", { className: "message", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: `https://images.websim.ai/avatar/${msg.username}`,
          alt: msg.username,
          className: "player-avatar",
          style: { width: "30px", height: "30px" }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 309,
          columnNumber: 13
        }
      ),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("strong", { children: msg.username }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 316,
          columnNumber: 15
        }),
        /* @__PURE__ */ jsxDEV("p", { children: msg.text }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 317,
          columnNumber: 15
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 315,
        columnNumber: 13
      })
    ] }, msg.id, true, {
      fileName: "<stdin>",
      lineNumber: 308,
      columnNumber: 11
    })) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 306,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "text",
          value: message,
          onChange: (e) => setMessage(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && sendMessage(),
          placeholder: "Type a message...",
          className: "message-input"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 324,
          columnNumber: 9
        }
      ),
      /* @__PURE__ */ jsxDEV("button", { className: "btn btn-primary", onClick: sendMessage, children: "Send" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 332,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 323,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 275,
    columnNumber: 5
  });
};
const GameDevDemo = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerPos, setPlayerPos] = useState({ x: 50, y: 250 });
  const [obstacles, setObstacles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const gameLoop = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#10b981";
      ctx.fillRect(playerPos.x, playerPos.y, 30, 30);
      const updatedObstacles = obstacles.map((obs) => ({
        ...obs,
        x: obs.x - 5
      })).filter((obs) => obs.x + obs.width > 0);
      if (Math.random() < 0.02) {
        updatedObstacles.push({
          x: canvas.width,
          y: Math.random() * (canvas.height - 50),
          width: 20 + Math.random() * 30,
          height: 20 + Math.random() * 30,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`
        });
      }
      updatedObstacles.forEach((obs) => {
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      });
      const collision = updatedObstacles.some(
        (obs) => playerPos.x < obs.x + obs.width && playerPos.x + 30 > obs.x && playerPos.y < obs.y + obs.height && playerPos.y + 30 > obs.y
      );
      if (collision) {
        setGameOver(true);
        clearInterval(gameLoop);
      }
      setScore((prev) => prev + 1);
      setObstacles(updatedObstacles);
    }, 30);
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setPlayerPos((prev) => ({
            ...prev,
            y: Math.max(0, prev.y - 15)
          }));
          break;
        case "ArrowDown":
          setPlayerPos((prev) => ({
            ...prev,
            y: Math.min(canvas.height - 30, prev.y + 15)
          }));
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(gameLoop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted, playerPos, obstacles]);
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayerPos({ x: 50, y: 250 });
    setObstacles([]);
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Game Development" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 443,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim provides canvas APIs and event handlers to create interactive games. This simple game demonstrates collision detection, animation, and player input." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 444,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "Score:" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 451,
          columnNumber: 11
        }),
        " ",
        score
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 450,
        columnNumber: 9
      }),
      gameOver && /* @__PURE__ */ jsxDEV("div", { className: "mb-4", style: { color: "red" }, children: [
        "Game Over! Your final score: ",
        score
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 455,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "btn btn-primary",
          onClick: startGame,
          children: gameStarted && !gameOver ? "Restart Game" : "Start Game"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 460,
          columnNumber: 9
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 449,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(
      "canvas",
      {
        ref: canvasRef,
        width: "600",
        height: "400",
        className: "game-canvas"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 468,
        columnNumber: 7
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-4", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Use the up and down arrow keys to control the green square." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 476,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("p", { children: "Avoid the colored obstacles!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 477,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 475,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 442,
    columnNumber: 5
  });
};
const AIDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [imagePrompt, setImagePrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const sendPrompt = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    try {
      const newMessage = {
        role: "user",
        content: prompt
      };
      const updatedHistory = [...conversationHistory, newMessage];
      setConversationHistory(updatedHistory);
      const completion = await websim.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are an intelligent assistant built into Websim. You help users understand Websim's capabilities and provide creative ideas."
          },
          ...updatedHistory
        ]
      });
      setConversationHistory([...updatedHistory, completion]);
      setResponse(completion.content);
      setPrompt("");
    } catch (error) {
      console.error("Error getting AI response:", error);
      setResponse("Sorry, there was an error processing your request.");
    } finally {
      setIsLoading(false);
    }
  };
  const generateImage = async () => {
    if (!imagePrompt.trim()) return;
    setImageLoading(true);
    try {
      const result = await websim.imageGen({
        prompt: imagePrompt,
        aspect_ratio: "1:1"
      });
      setGeneratedImage(result.url);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setImageLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "AI Integration" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 552,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim integrates powerful AI capabilities for natural language understanding, image generation, and more. Try the demos below to see how you can leverage AI in your projects." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 553,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "showcase-grid", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", children: [
        /* @__PURE__ */ jsxDEV("h3", { children: "Chat with AI" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 560,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "message-container", children: [
          conversationHistory.map((msg, index) => /* @__PURE__ */ jsxDEV("div", { className: "message", style: {
            backgroundColor: msg.role === "user" ? "rgba(16, 185, 129, 0.1)" : "rgba(99, 102, 241, 0.1)",
            marginLeft: msg.role === "user" ? "auto" : "0",
            marginRight: msg.role === "user" ? "0" : "auto",
            maxWidth: "80%"
          }, children: /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: msg.role === "user" ? "You" : "AI" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 570,
              columnNumber: 19
            }),
            /* @__PURE__ */ jsxDEV("p", { children: msg.content }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 571,
              columnNumber: 19
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 569,
            columnNumber: 17
          }) }, index, false, {
            fileName: "<stdin>",
            lineNumber: 563,
            columnNumber: 15
          })),
          conversationHistory.length === 0 && /* @__PURE__ */ jsxDEV("p", { className: "text-center", style: { color: "var(--gray)" }, children: "Send a message to start the conversation" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 577,
            columnNumber: 15
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 561,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: prompt,
              onChange: (e) => setPrompt(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && sendPrompt(),
              placeholder: "Ask anything about Websim...",
              className: "message-input",
              disabled: isLoading
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 584,
              columnNumber: 13
            }
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "btn btn-primary",
              onClick: sendPrompt,
              disabled: isLoading,
              children: isLoading ? "Thinking..." : "Send"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 593,
              columnNumber: 13
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 583,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 559,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", children: [
        /* @__PURE__ */ jsxDEV("h3", { children: "Image Generation" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 604,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center", style: { minHeight: "200px" }, children: generatedImage ? /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: generatedImage,
            alt: "Generated from prompt",
            style: { maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 607,
            columnNumber: 15
          }
        ) : /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--gray)" }, children: "Generated image will appear here" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 613,
          columnNumber: 15
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 605,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: imagePrompt,
              onChange: (e) => setImagePrompt(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && generateImage(),
              placeholder: "Describe an image to generate...",
              className: "message-input",
              disabled: imageLoading
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 620,
              columnNumber: 13
            }
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "btn btn-primary",
              onClick: generateImage,
              disabled: imageLoading,
              children: imageLoading ? "Generating..." : "Generate"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 629,
              columnNumber: 13
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 619,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 603,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 558,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 551,
    columnNumber: 5
  });
};
const DataVizDemo = () => {
  const canvasRef = useRef(null);
  const generateRandomData = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      label: `Item ${i + 1}`,
      value: 10 + Math.random() * 90,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    }));
  };
  const [data, setData] = useState(generateRandomData(7));
  const [chartType, setChartType] = useState("bar");
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const margin = 40;
    const width = canvas.width - margin * 2;
    const height = canvas.height - margin * 2;
    switch (chartType) {
      case "bar":
        const barWidth = width / data.length * 0.8;
        const barSpacing = width / data.length * 0.2;
        ctx.beginPath();
        ctx.strokeStyle = "#64748b";
        ctx.moveTo(margin, margin);
        ctx.lineTo(margin, height + margin);
        ctx.lineTo(width + margin, height + margin);
        ctx.stroke();
        data.forEach((item, i) => {
          const barHeight = item.value / 100 * height;
          const x = margin + i * (barWidth + barSpacing);
          const y = height + margin - barHeight;
          ctx.fillStyle = item.color;
          ctx.fillRect(x, y, barWidth, barHeight);
          ctx.fillStyle = "#f8fafc";
          ctx.font = "12px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(item.label, x + barWidth / 2, height + margin + 20);
          ctx.fillText(Math.round(item.value), x + barWidth / 2, y - 10);
        });
        break;
      case "pie":
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(width, height) / 2;
        let total = data.reduce((sum, item) => sum + item.value, 0);
        let startAngle = 0;
        data.forEach((item, i) => {
          const sliceAngle = item.value / total * 2 * Math.PI;
          ctx.beginPath();
          ctx.fillStyle = item.color;
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
          ctx.closePath();
          ctx.fill();
          const labelAngle = startAngle + sliceAngle / 2;
          const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
          const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
          ctx.fillStyle = "#f8fafc";
          ctx.font = "12px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`${item.label}: ${Math.round(item.value)}`, labelX, labelY);
          startAngle += sliceAngle;
        });
        break;
      case "line":
        const pointWidth = width / (data.length - 1);
        ctx.beginPath();
        ctx.strokeStyle = "#64748b";
        ctx.moveTo(margin, margin);
        ctx.lineTo(margin, height + margin);
        ctx.lineTo(width + margin, height + margin);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "#6366f1";
        ctx.lineWidth = 3;
        data.forEach((item, i) => {
          const x = margin + i * pointWidth;
          const y = height + margin - item.value / 100 * height;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          ctx.fillStyle = item.color;
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = "#f8fafc";
          ctx.font = "12px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(item.label, x, height + margin + 20);
          ctx.fillText(Math.round(item.value), x, y - 10);
        });
        ctx.stroke();
        break;
    }
  }, [data, chartType]);
  const regenerateData = () => {
    setData(generateRandomData(7));
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Data Visualization" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 792,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim provides canvas APIs for creating custom data visualizations. This demo shows how to build interactive charts from your data." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 793,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { children: "Chart Type: " }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 800,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV(
          "select",
          {
            value: chartType,
            onChange: (e) => setChartType(e.target.value),
            className: "message-input",
            style: { width: "auto" },
            children: [
              /* @__PURE__ */ jsxDEV("option", { value: "bar", children: "Bar Chart" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 807,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV("option", { value: "pie", children: "Pie Chart" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 808,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV("option", { value: "line", children: "Line Chart" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 809,
                columnNumber: 13
              })
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 801,
            columnNumber: 11
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 799,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("button", { className: "btn btn-primary", onClick: regenerateData, children: "Randomize Data" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 813,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 798,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(
      "canvas",
      {
        ref: canvasRef,
        width: "600",
        height: "400",
        className: "game-canvas"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 818,
        columnNumber: 7
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxDEV("h4", { children: "Sample Code" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 826,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "code-editor", children: `// Simple bar chart with canvas
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

// Draw bars for each data point
data.forEach((item, i) => {
  const x = margin + i * (barWidth + barSpacing);
  const y = height - (item.value / maxValue) * height;
  
  ctx.fillStyle = item.color;
  ctx.fillRect(x, margin + height - y, barWidth, y);
});` }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 827,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 825,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 791,
    columnNumber: 5
  });
};
const SocialNetworkDemo = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const postList = room.collection("post").getList();
      setPosts(postList.reverse());
    };
    fetchPosts();
    const unsubscribe = room.collection("post").subscribe(function(updatedPosts) {
      setPosts(updatedPosts.reverse());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const createPost = async () => {
    if (!postContent.trim()) return;
    setIsLoading(true);
    try {
      await room.collection("post").create({
        message: postContent,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      setPostContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const createLike = async (postId) => {
    try {
      const existingLikes = room.collection("like").filter({ post_id: postId, username: room.peers[room.clientId].username }).getList();
      if (existingLikes.length > 0) {
        await room.collection("like").delete(existingLikes[0].id);
      } else {
        await room.collection("like").create({
          post_id: postId
        });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };
  const getLikes = (postId) => {
    return room.collection("like").filter({ post_id: postId }).getList();
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Social Network" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 921,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim's persistent record system allows you to build social networking features with posts, comments, likes, and user profiles." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 922,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "post-form", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "text",
          value: postContent,
          onChange: (e) => setPostContent(e.target.value),
          placeholder: "What's on your mind?",
          className: "message-input post-input",
          disabled: isLoading
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 928,
          columnNumber: 9
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "btn btn-primary",
          onClick: createPost,
          disabled: isLoading,
          children: "Post"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 936,
          columnNumber: 9
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 927,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "posts-container", children: posts.length === 0 ? /* @__PURE__ */ jsxDEV("p", { className: "text-center", style: { color: "var(--gray)" }, children: "No posts yet. Be the first to post!" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 947,
      columnNumber: 11
    }) : posts.map((post) => {
      const likes = getLikes(post.id);
      const hasLiked = likes.some((like) => like.username === room.peers[room.clientId]?.username);
      return /* @__PURE__ */ jsxDEV("div", { className: "post", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "post-header", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: `https://images.websim.ai/avatar/${post.username}`,
              alt: post.username,
              className: "player-avatar"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 958,
              columnNumber: 19
            }
          ),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: post.username }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 964,
              columnNumber: 21
            }),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.8rem", color: "var(--gray)" }, children: new Date(post.created_at).toLocaleString() }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 965,
              columnNumber: 21
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 963,
            columnNumber: 19
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 957,
          columnNumber: 17
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "post-content", children: post.message }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 971,
          columnNumber: 17
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "post-actions", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "action-btn",
              onClick: () => createLike(post.id),
              style: { color: hasLiked ? "var(--primary)" : "var(--gray)" },
              children: [
                "\u2764\uFE0F ",
                likes.length > 0 && likes.length
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 976,
              columnNumber: 19
            }
          ),
          /* @__PURE__ */ jsxDEV("button", { className: "action-btn", children: "\u{1F4AC} Comment" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 983,
            columnNumber: 19
          }),
          /* @__PURE__ */ jsxDEV("button", { className: "action-btn", children: "\u{1F504} Share" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 986,
            columnNumber: 19
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 975,
          columnNumber: 17
        })
      ] }, post.id, true, {
        fileName: "<stdin>",
        lineNumber: 956,
        columnNumber: 15
      });
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 945,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 920,
    columnNumber: 5
  });
};
const DevEnvironmentDemo = () => {
  const [code, setCode] = useState(`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Websim"));`);
  const [output, setOutput] = useState("");
  const canvasRef = useRef(null);
  const [drawingTool, setDrawingTool] = useState("pen");
  const [selectedColor, setSelectedColor] = useState("#6366f1");
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const colors = ["#6366f1", "#f43f5e", "#10b981", "#f59e0b", "#ffffff", "#000000"];
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);
  const runCode = () => {
    try {
      const consoleOutput = [];
      const safeConsole = {
        log: (...args) => {
          consoleOutput.push(args.map((arg) => String(arg)).join(" "));
        },
        error: (...args) => {
          consoleOutput.push("ERROR: " + args.map((arg) => String(arg)).join(" "));
        }
      };
      const executor = new Function("console", code);
      executor(safeConsole);
      setOutput(consoleOutput.join("\n"));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };
  const handleCanvasMouseDown = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLastPosition({ x, y });
  };
  const handleCanvasMouseMove = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineWidth = drawingTool === "pen" ? 2 : 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (drawingTool === "eraser") {
      ctx.strokeStyle = "#1e293b";
    } else {
      ctx.strokeStyle = selectedColor;
    }
    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    setLastPosition({ x, y });
  };
  const handleCanvasMouseUp = () => {
    setIsDrawing(false);
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Custom Development Environments" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 1097,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: "Websim can be used to create specialized development environments, design tools, and creative platforms tailored to specific workflows." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 1098,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "showcase-grid", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", children: [
        /* @__PURE__ */ jsxDEV("h3", { children: "Code Editor & Console" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1105,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV(
          "textarea",
          {
            value: code,
            onChange: (e) => setCode(e.target.value),
            className: "code-editor",
            style: {
              width: "100%",
              height: "200px",
              resize: "vertical",
              marginBottom: "1rem"
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 1106,
            columnNumber: 11
          }
        ),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-primary mb-4", onClick: runCode, children: "Run Code" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1118,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "code-editor",
            style: {
              height: "100px",
              overflowY: "auto",
              backgroundColor: "#0a0e14"
            },
            children: output || "Console output will appear here"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 1122,
            columnNumber: 11
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 1104,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "showcase-card", children: [
        /* @__PURE__ */ jsxDEV("h3", { children: "Design Tool" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1135,
          columnNumber: 11
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "canvas-container", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "canvas-tools", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `tool-btn ${drawingTool === "pen" ? "active" : ""}`,
                onClick: () => setDrawingTool("pen"),
                style: { backgroundColor: "#6366f1" },
                children: "\u270F\uFE0F"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 1138,
                columnNumber: 15
              }
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `tool-btn ${drawingTool === "eraser" ? "active" : ""}`,
                onClick: () => setDrawingTool("eraser"),
                style: { backgroundColor: "#64748b" },
                children: "\u{1F9FD}"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 1145,
                columnNumber: 15
              }
            ),
            /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 } }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 1152,
              columnNumber: 15
            }),
            /* @__PURE__ */ jsxDEV("button", { className: "btn btn-primary", onClick: clearCanvas, children: "Clear Canvas" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 1153,
              columnNumber: 15
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 1137,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "color-picker", children: colors.map((color) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `color-option ${selectedColor === color ? "active" : ""}`,
              style: { backgroundColor: color },
              onClick: () => setSelectedColor(color)
            },
            color,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 1160,
              columnNumber: 17
            }
          )) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 1158,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV(
            "canvas",
            {
              ref: canvasRef,
              width: "100%",
              height: "200",
              className: "game-canvas",
              onMouseDown: handleCanvasMouseDown,
              onMouseMove: handleCanvasMouseMove,
              onMouseUp: handleCanvasMouseUp,
              onMouseLeave: handleCanvasMouseUp
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 1169,
              columnNumber: 13
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 1136,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 1134,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 1103,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 1096,
    columnNumber: 5
  });
};
const root = createRoot(document.getElementById("app"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 1188,
  columnNumber: 13
}));
document.addEventListener("DOMContentLoaded", () => {
  const particlesContainer = document.querySelector(".particles-container");
  function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = `${5 + Math.random() * 10}px`;
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    particle.style.borderRadius = "50%";
    particle.style.opacity = "0.7";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `float-up ${5 + Math.random() * 10}s linear`;
    particle.addEventListener("animationend", () => {
      particle.remove();
    });
    particlesContainer.appendChild(particle);
  }
  for (let i = 0; i < 20; i++) {
    createParticle();
  }
  setInterval(createParticle, 500);
});
