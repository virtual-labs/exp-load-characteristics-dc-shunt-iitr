
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {

                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 50,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint);
        },

        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 50,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },

        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(0,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 50,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 10 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -50 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("MB1"),
            e2 = prepare("AA2"),
            e3 = prepare("AA1"),
            e4 = prepare("VV1"),
            e5 = prepare("AB1"),
            e6 = prepare("AB2"),
            e7 = prepare("VA1"),
            e8 = prepare("VB2"),
            e9 = prepare("VV2"),
            e10 = prepare("S1"),
            e11 = prepare("S2"),
            e12 = prepare("S3"),
            e13 = prepare1("MB2"),
            e14 = prepare2("B2"),
            e15 = prepare("M3"),
            e16 = prepare("M4"),
            e17 = prepare("G1"),
            e18 = prepare("G3"),
            e19 = prepare("G2"),
            e20 = prepare("G4"),
            e21 = prepare("M1"),
            e22 = prepare("M2"),
            e23 = prepare2("B1")

            
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),

            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {

        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_MB1_VV2 = [
            {

                "source": "MB1",
                "target": "VV2"
            },

            {
                "source": "VV2",
                "target": "MB1"
            }
        ];

        var correct_connections_MB1_M3 = [
            {
                "source": "MB1",
                "target": "M3"
            },
    
            {
                "source": "M3",
                "target": "MB1"
            }
        ];
        var correct_connections_M3_M4 = [
            {
                "source": "M3",
                "target": "M4"
            },
    
            {
                "source": "M4",
                "target": "M3"
            }
        ];
        var correct_connections_MB2_VV1 = [
            {
                "source": "MB2",
                "target": "VV1"
            },
    
            {
                "source": "VV1",
                "target": "MB2"
            }
        ];
        var correct_connections_MB2_AA1 = [
            {
                "source": "MB2",
                "target": "AA1"
            },
    
            {
                "source": "AA1",
                "target": "MB2"
            }
        ];

        var correct_connections_S1_AA2 = [
            {
                "source": "S1",
                "target": "AA2"
            },
    
            {
                "source": "AA2",
                "target": "S1"
            }
        ];

        var correct_connections_S2_M2 = [
            {
                "source": "S2",
                "target": "M2"
            },
    
            {
                "source": "M2",
                "target": "S2"
            }
        ];

        var correct_connections_S3_M1 = [
            {
                "source": "M1",
                "target": "S3"
            },
    
            {
                "source": "S3",
                "target": "M1"
            }
        ];

        var correct_connections_B2_G3 = [
            {
                "source": "B2",
                "target": "G3"
            },
    
            {
                "source": "G3",
                "target": "B2"
            }
        ];

        var correct_connections_G3_G4 = [
            {
                "source": "G3",
                "target": "G4"
            },
    
            {
                "source": "G4",
                "target": "G3"
            }
        ];

        var correct_connections_G4_VB2 = [
            {
                "source": "G4",
                "target": "VB2"
            },
    
            {
                "source": "VB2",
                "target": "G4"
            }
        ];

        var correct_connections_B1_VA1 = [
            {
                "source": "B1",
                "target": "VA1"
            },
    
            {
                "source": "VA1",
                "target": "B1"
            }
        ];

        var correct_connections_VA1_AB2 = [
            {
                "source": "VA1",
                "target": "AB2"
            },
    
            {
                "source": "AB2",
                "target": "VA1"
            }
        ];

        var correct_connections_AB1_G1 = [
            {
                "source": "AB1",
                "target": "G1"
            },
    
            {
                "source": "G1",
                "target": "AB1"
            }
        ];

        var correct_connections_AB1_G2 = [
            {
                "source": "AB1",
                "target": "G2"
            },
    
            {
                "source": "G2",
                "target": "AB1"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            
                {
    
                    "source": "MB1",
                    "target": "VV2"
                },
    
                {
                    "source": "VV2",
                    "target": "MB1"
                },
            
    
            
                {
                    "source": "MB1",
                    "target": "M3"
                },
        
                {
                    "source": "M3",
                    "target": "MB1"
                },
            
            
                {
                    "source": "M3",
                    "target": "M4"
                },
        
                {
                    "source": "M4",
                    "target": "M3"
                },
            
            
                {
                    "source": "MB2",
                    "target": "VV1"
                },
        
                {
                    "source": "VV1",
                    "target": "MB2"
                },
            
            
                {
                    "source": "MB2",
                    "target": "AA1"
                },
        
                {
                    "source": "AA1",
                    "target": "MB2"
                },
            
    
            
                {
                    "source": "S1",
                    "target": "AA2"
                },
        
                {
                    "source": "AA2",
                    "target": "S1"
                },
            
    
            
                {
                    "source": "S2",
                    "target": "M2"
                },
        
                {
                    "source": "M2",
                    "target": "S2"
                },
            
    
            
                {
                    "source": "M1",
                    "target": "S3"
                },
        
                {
                    "source": "S3",
                    "target": "M1"
                },
            
    
            
                {
                    "source": "B2",
                    "target": "G3"
                },
        
                {
                    "source": "G3",
                    "target": "B2"
                },
            
    
            
                {
                    "source": "G3",
                    "target": "G4"
                },
        
                {
                    "source": "G4",
                    "target": "G3"
                },
            
    
            
                {
                    "source": "G4",
                    "target": "VB2"
                },
        
                {
                    "source": "VB2",
                    "target": "G4"
                },
            
    
            
                {
                    "source": "B1",
                    "target": "VA1"
                },
        
                {
                    "source": "VA1",
                    "target": "B1"
                },
            
    
            
                {
                    "source": "VA1",
                    "target": "AB2"
                },
        
                {
                    "source": "AB2",
                    "target": "VA1"
                },
            
    
            
                {
                    "source": "AB1",
                    "target": "G1"
                },
        
                {
                    "source": "G1",
                    "target": "AB1"
                },
            
    
            
                {
                    "source": "AB1",
                    "target": "G2"
                },
        
                {
                    "source": "G2",
                    "target": "AB1"
                }
            
    
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_MB1_VV2 = false;
        var is_connected_MB1_M3 = false;
        var is_connected_M3_M4 = false;
        var is_connected_MB2_VV1 = false;
        var is_connected_MB2_AA1 = false;
        var is_connected_S1_AA2 = false;
        var is_connected_S2_M2 = false;
        var is_connected_S3_M1 = false;
        var is_connected_B2_G3 = false;
        var is_connected_G3_G4 = false;
        var is_connected_G4_VB2 = false;
        var is_connected_B1_VA1 = false;
        var is_connected_VA1_AB2 = false;
        var is_connected_AB1_G1 = false;
        var is_connected_AB1_G2 = false;
        var is_connected = false;
        var unallowed_connection_present = false;
        //checking for 1_7 connection 1
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_MB1_VV2){
                is_connected_MB1_VV2 = correct_connections_MB1_VV2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                }));
            }
            
        });
        //checking for 2_3 connection 2
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_MB1_M3){
                is_connected_MB1_M3 = correct_connections_MB1_M3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           
            
        });
        //checking for 4_5 connection 3
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_M3_M4){
                is_connected_M3_M4 = correct_connections_M3_M4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           
            
        });
        //checking for 6_10 connection 4
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_MB2_VV1){
                is_connected_MB2_VV1 = correct_connections_MB2_VV1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           
            
        });

        //checking for 8_9 connection 5
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_MB2_AA1){
                is_connected_MB2_AA1 = correct_connections_MB2_AA1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              
        });

        //6
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_S1_AA2){
                is_connected_S1_AA2 = correct_connections_S1_AA2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });
        // 7
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_S2_M2){
                is_connected_S2_M2 = correct_connections_S2_M2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });
        // 8
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_S3_M1){
                is_connected_S3_M1 = correct_connections_S3_M1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        //9
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_B2_G3){
                is_connected_B2_G3 = correct_connections_B2_G3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        // 10
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_G3_G4){
                is_connected_G3_G4 = correct_connections_G3_G4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        // 11
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_G4_VB2){
                is_connected_G4_VB2 = correct_connections_G4_VB2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        //12
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_B1_VA1){
                is_connected_B1_VA1 = correct_connections_B1_VA1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        //13
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_VA1_AB2){
                is_connected_VA1_AB2 = correct_connections_VA1_AB2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });


        //14
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_AB1_G1){
                is_connected_AB1_G1 = correct_connections_AB1_G1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        //15
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_AB1_G2){
                is_connected_AB1_G2 = correct_connections_AB1_G2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        

        // if (is_connected_AB1_G1 && is_connected_AB1_G2 && is_connected_B1_VA1 && is_connected_B2_G3 && is_connected_G3_G4 && is_connected_G4_VB2 && is_connected_M3_M4 && is_connected_MB1_M3 && is_connected_MB1_VV2 && is_connected_MB2_AA1 && is_connected_MB2_VV1 && is_connected_S1_AA2 && is_connected_S2_M2 && is_connected_S3_M1 && is_connected_VA1_AB2 && unallowed_connection_present) 
        if (is_connected_AB1_G1) 
            
        
        {
            rightConnection = true;
            mcbState = true;
            alert("Correct connection");
            changeImage();
            // start();
            fnccheck();
            
            document.getElementById("mcb_off").disabled = false;
            document.getElementById("mcb_off").classList.remove("disabled");
            // document.getElementById("mcb_off").classList.add("hidden");
            // document.getElementById("mcb_on").classList.add("display");
            // document.getElementById("mcb_on").classList.remove("hidden");

            document.getElementById("rem1").remove();
            document.getElementById("rem2").remove();
            document.getElementById("rem3").remove();
            document.getElementById("rem4").remove();
            document.getElementById("rem5").remove();
            document.getElementById("rem6").remove();
            document.getElementById("rem7").remove();
            document.getElementById("rem8").remove();
            document.getElementById("rem9").remove();
            document.getElementById("rem10").remove();
            document.getElementById("rem11").remove();
            document.getElementById("rem12").remove();
            document.getElementById("rem13").remove();
            document.getElementById("rem14").remove();
            document.getElementById("rem15").remove();
            document.getElementById("rem16").remove();
            document.getElementById("rem17").remove();
            document.getElementById("rem18").remove();
            document.getElementById("rem19").remove();
            document.getElementById("rem20").remove();
            document.getElementById("rem21").remove();
            document.getElementById("rem22").remove();
            document.getElementById("rem23").remove();

        } 
        else 
        {
            rightConnection = false;
            
            //changeImage();
            // stop();
           alert("Wrong connection");
           if (is_connected = false) {
            document.getElementById('mcb_off').addEventListener('click', alertMCB)    
           }
           
            return;
        } 
    });

});

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function(){  
    value = this.value;
    if (this.value == 1) {
        rangeChange1();
        
        text1.value = A1[0]
        console.log(text1.value);
        
        text2.value = V1[0]
        text3.value = A2[0]
        text4.value = V2[0]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_7').src = 'assets/push1.png'
        document.getElementById('push1_8').src = 'assets/push1.png'
        document.getElementById('push1_9').src = 'assets/push1.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1_2').src = 'assets/push1.png'
        document.getElementById('push1_3').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }
    if (this.value == 2) {
        rangeChange2();
        text1.value = A1[1]      
        text2.value = V1[1]
        text3.value = A2[1]
        text4.value = V2[1]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push1.png'
        document.getElementById('push1_7').src = 'assets/push1.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push1.png'
        document.getElementById('push1_3').src = 'assets/push1.png'
        document.getElementById('push1_2').src = 'assets/push1.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'


    }
    if (this.value == 3) {
        rangeChange3();
        text1.value = A1[2]      
        text2.value = V1[2]
        text3.value = A2[2]
        text4.value = V2[2]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push1.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push1.png'
        document.getElementById('push1_3').src = 'assets/push1.png'
        document.getElementById('push1_2').src = 'assets/push1.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }

    if (this.value == 4) {
        rangeChange4();
        text1.value = A1[3]      
        text2.value = V1[3]
        text3.value = A2[3]
        text4.value = V2[3]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push1.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push1.png'
        document.getElementById('push1_2').src = 'assets/push1.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }
    if (this.value == 5) {
        rangeChange5();
        text1.value = A1[4]      
        text2.value = V1[4]
        text3.value = A2[4]
        text4.value = V2[4]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push1.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push2.png'
        document.getElementById('push1_2').src = 'assets/push1.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }
    if (this.value == 6) {
        rangeChange6();
        text1.value = A1[5]      
        text2.value = V1[5]
        text3.value = A2[5]
        text4.value = V2[5]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push2.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push2.png'
        document.getElementById('push1_2').src = 'assets/push1.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }
    if (this.value == 7) {
        rangeChange7();
        text1.value = A1[6]      
        text2.value = V1[6]
        text3.value = A2[6]
        text4.value = V2[6]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push2.png'
        document.getElementById('push1_6').src = 'assets/push1.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push2.png'
        document.getElementById('push1_2').src = 'assets/push2.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }
    if (this.value == 8) {
        rangeChange8();
        text1.value = A1[7]      
        text2.value = V1[7]
        text3.value = A2[7]
        text4.value = V2[7]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push2.png'
        document.getElementById('push1_6').src = 'assets/push2.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push2.png'
        document.getElementById('push1_2').src = 'assets/push2.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push1.png'
    }
    if (this.value == 9) {
        rangeChange9();
        text1.value = A1[8]      
        text2.value = V1[8]
        text3.value = A2[8]
        text4.value = V2[8]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push2.png'
        document.getElementById('push1_6').src = 'assets/push2.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push2.png'
        document.getElementById('push1_2').src = 'assets/push2.png'
        document.getElementById('push1_1').src = 'assets/push1.png'
        document.getElementById('push1').src = 'assets/push2.png'
    }
    if (this.value == 10) {
        rangeChange10();
        text1.value = A1[9]      
        text2.value = V1[9]
        text3.value = A2[9]
        text4.value = V2[9]
        document.getElementById('push1_5').src = 'assets/push2.png'
        document.getElementById('push1_9').src = 'assets/push2.png'
        document.getElementById('push1_8').src = 'assets/push2.png'
        document.getElementById('push1_7').src = 'assets/push2.png'
        document.getElementById('push1_6').src = 'assets/push2.png'
        document.getElementById('push1_4').src = 'assets/push2.png'
        document.getElementById('push1_3').src = 'assets/push2.png'
        document.getElementById('push1_2').src = 'assets/push2.png'
        document.getElementById('push1_1').src = 'assets/push2.png'
        document.getElementById('push1').src = 'assets/push2.png'
    }
};
        // var y = table.insertRow(1);
    
        // cell1.innerHTML = "Load Current";
        // cell2.innerHTML = "Terminal Voltage";
        // cellX = y.insertCell(0);
        // cellY = y.insertCell(1);
    var table = document.querySelector('table');
    var addToTable = document.getElementById('addToTable');
    
    addToTable.addEventListener('click', () => {
        clickCounter++;
        if (clickCounter <= 8) {
            var y = table.insertRow(clickCounter);
            
            var cell1 = y.insertCell(0);
            var cell2 = y.insertCell(1);
            var cell3 = y.insertCell(2);
            cell1.innerHTML = "S.No";
            cell2.innerHTML = "Current";
            cell3.innerHTML = "Voltage";
            
            for (let i = 0; i < 10; i++) {
                if (value == (i+1)) {
                    cell1.innerHTML = clickCounter
                    cell2.innerHTML = A2[i];
                    cell3.innerHTML = V2[i];
                }      
            }
        } else {
            alert("Maximum 8 readings are allowed.")
        }
        
        

        
        trace1.x.push(cell2.innerHTML);
        trace1.y.push(cell3.innerHTML); 
    
        // var data = [trace1];
        // Plotly.newPlot('myDiv', data, {}, {showSendToCloud: true}); 
      })
    



var graphPage = document.getElementById('button_3');
var graph = document.getElementById('myButton');
var x = table.insertRow(0);

var cell1 = x.insertCell(0);
var cell2 = x.insertCell(1);
var cell3 = x.insertCell(2);

cell1.innerHTML = "Serial.No";
cell2.innerHTML = "Current";
cell3.innerHTML = "Voltage";
var clickCounter = 0;
var trace1 = {
  x: [],
  y: [],
  type: 'scatter'
};

var layout = {
    
    xaxis: {
      title: {
        text: 'Load Current',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Voltage',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };

graphPage.addEventListener('click', () => {
    var data = [trace1];
    if (clickCounter >= 6) {
        Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});  
    } else {
        alert("Minimum 6 readings are required")
    }

// console.log(graphPage);


})



var rightConnection = false;
var offState = true;
var mcbState = false;
var bulb1 = document.getElementById('push1');
var bulb2 = document.getElementById('push1_9');
var bulb3 = document.getElementById('push1_8');
var bulb4 = document.getElementById('push1_7');
var bulb5 = document.getElementById('push1_6');
var bulb6 = document.getElementById('push1_5');
var bulb7 = document.getElementById('push1_4');
var bulb8 = document.getElementById('push1_3');
var bulb9 = document.getElementById('push1_2');
var bulb10 = document.getElementById('push1_1');
function changeImage() {
    if (rightConnection == false) {
        alert("Make the connection first");
        console.log("Clicked");
       
        
    }         
    else {
        if (offState == true) {
            offState = false;
            mcbState = true;
            var starter1 = document.getElementById('starter1').querySelector('div img');
            var starter2 = document.getElementById('starter2').querySelector('div img');
            var starter3 = document.getElementById('starter3').querySelector('div img');
            // console.log(starter1);
            
            document.getElementById("mcb_off").src = "assets/mcb2.png";
            starter1.src = "assets/push2.png";
            starter2.src = "assets/push2.png";
            starter3.src = "assets/push2.png";
            
            start();
            if (mcbState == true) {
                document.getElementById('select_1').disabled = false;
                document.getElementById('push1').disabled = false;
                document.getElementById('push1_1').disabled = false;
                document.getElementById('push1_2').disabled = false;
                document.getElementById('push1_3').disabled = false;
                document.getElementById('push1_4').disabled = false;
                document.getElementById('push1_5').disabled = false;
                document.getElementById('push1_6').disabled = false;
                document.getElementById('push1_7').disabled = false;
                document.getElementById('push1_8').disabled = false;
                document.getElementById('push1_9').disabled = false;
                document.getElementById('addToTable').disabled = false;
            }
        }
        
        
    }
}

    var isOn = false;

    var rangeClock =  document.querySelector('#niddle_5');
    var rangeClock2 =  document.querySelector('#niddle_4');
    var rangeClock3 =  document.querySelector('#niddle_2');
    var rangeClock4 =  document.querySelector('#niddle_3');
    var text1 = document.getElementById('text_1');
    var text2 = document.getElementById('text_2');
    var text3 = document.getElementById('text_3');
    var text4 = document.getElementById('text_4');
    var A1 = [3,3.6,5.4,6.8,8,10,11.5,13,14.2,15.2];
    var V1 = [225,225,225,225,225,225,225,225,225,225];
    var A2 = [1.2,2.8,3.2,3.6,5.5,7,8.1,10.2,11,12.7];
    var V2 = [220,212,208,205,200,195,189,184,179,176];
    
    
    function rangeChange1() {
       
        // rangeShow.value = rotateClock;
        
        rangeClock.style.transform = 'rotate(-47.5deg)';
        rangeClock2.style.transform = 'rotateZ(79.95deg)';
        rangeClock3.style.transform = 'rotate(-70deg)';
        rangeClock4.style.transform = 'rotateZ(76.67deg)';
        // rangeShow.value = rotateClock;
    }

    function rangeChange2() {
     
      // rangeShow.value = rotateClock;
      rangeClock.style.transform = 'rotate(-43deg)';
      rangeClock2.style.transform = 'rotateZ(79.95deg)';
      rangeClock3.style.transform = 'rotate(-49deg)';
      rangeClock4.style.transform = 'rotateZ(71.33deg)';
      // rangeShow.value = rotateClock;
  }

  function rangeChange3() {
     
    // rangeShow.value = rotateClock;
    rangeClock.style.transform = 'rotate(-29.5deg)';
    rangeClock2.style.transform = 'rotateZ(79.95deg)';
    rangeClock3.style.transform = 'rotate(-41.5deg)';
    rangeClock4.style.transform = 'rotateZ(68.66deg)';
    // rangeShow.value = rotateClock;
  }

  function rangeChange4() {
      
    // rangeShow.value = rotateClock;
    rangeClock.style.transform = 'rotate(-19deg)';
    rangeClock2.style.transform = 'rotateZ(79.95deg)';
    rangeClock3.style.transform = 'rotate(-43deg)';
    rangeClock4.style.transform = 'rotateZ(66.66deg)';
    // rangeShow.value = rotateClock;
  }

  function rangeChange5() {
     
    // rangeShow.value = rotateClock;
    rangeClock.style.transform = 'rotate(-10deg)';
    rangeClock2.style.transform = 'rotateZ(79.95deg)';
    rangeClock3.style.transform = 'rotate(-28.75deg)';
    rangeClock4.style.transform = 'rotateZ(63.33deg)';
    // rangeShow.value = rotateClock;
}

function rangeChange6() {
     
  // rangeShow.value = rotateClock;
  rangeClock.style.transform = 'rotate(5deg)';
  rangeClock2.style.transform = 'rotateZ(79.95deg)';
  rangeClock3.style.transform = 'rotate(-17.5deg)';
  rangeClock4.style.transform = 'rotateZ(60deg)';
  // rangeShow.value = rotateClock;
}

function rangeChange7() {
     
  // rangeShow.value = rotateClock;
  rangeClock.style.transform = 'rotate(16.25deg)';
  rangeClock2.style.transform = 'rotateZ(79.95deg)';
  rangeClock3.style.transform = 'rotate(-9.25deg)';
  rangeClock4.style.transform = 'rotateZ(56deg)';
  // rangeShow.value = rotateClock;
}

function rangeChange8() {
     
  // rangeShow.value = rotateClock;
  rangeClock.style.transform = 'rotate(27.5deg)';
  rangeClock2.style.transform = 'rotateZ(79.95deg)';
  rangeClock3.style.transform = 'rotate(6.5deg)';
  rangeClock4.style.transform = 'rotateZ(52.67deg)';
  // rangeShow.value = rotateClock;
}

function rangeChange9() {
     
  // rangeShow.value = rotateClock;
  rangeClock.style.transform = 'rotate(36.5deg)';
  rangeClock2.style.transform = 'rotateZ(79.95deg)';
  rangeClock3.style.transform = 'rotate(12.5deg)';
  rangeClock4.style.transform = 'rotateZ(49.33deg)';
  // rangeShow.value = rotateClock;
}

function rangeChange10() {
     
  // rangeShow.value = rotateClock;
  rangeClock.style.transform = 'rotate(44deg)';
  rangeClock2.style.transform = 'rotateZ(79.95deg)';
  rangeClock3.style.transform = 'rotate(25.25deg)';
  rangeClock4.style.transform = 'rotateZ(47.33deg)';
  // rangeShow.value = rotateClock;
}

var count = 0;
function bulbClick() {
  

  count++;
  
  if (count==1) {
    
    rangeChange1();
  }
  if (count==2) {
    rangeChange2();
  }
  if (count==3) {
    rangeChange3();
  }
  if (count==4) {
    rangeChange4();
  }
  if (count==5) {
    rangeChange5();
  }
  if (count==6) {
    rangeChange6();
  }
  if (count==7) {
    rangeChange7();
  }
  if (count==8) {
    rangeChange8();
  }
  if (count==9) {
    rangeChange9();
  }
  if (count==10) {
    rangeChange10();
  }
}



    var deg1 = 2; // starting
var deg2 = -2
var rotation_diff = 5;

var rotation;

function start()
{
    rotation=1;    
    myFunction();
}

function stop()
{
    rotation=0;    
}

function myFunction() 
{
    var img1 = document.querySelector('.rotate1');
    var img2 = document.querySelector('.rotate2');
        
    
    img1.style.transform = "rotate("+deg1+"deg)";

        
    if(rotation==1) {
      
    setTimeout("myFunction()",10);   } 
    deg1 = deg1 + rotation_diff;
    deg2 = deg2 + rotation_diff;
  }


function fnccheck()
{

 jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {

                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(128,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: false,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 10 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("MB1"),
            e2 = prepare("AA2"),
            e3 = prepare("AA1"),
            e4 = prepare("VV1"),
            e5 = prepare("AB1"),
            e6 = prepare("AB2"),
            e7 = prepare("VA1"),
            e8 = prepare("VB2"),
            e9 = prepare("VV2"),
            e10 = prepare("S1"),
            e11 = prepare("S2"),
            e12 = prepare("S3"),
            e13 = prepare("MB2"),
            e14 = prepare("B2"),
            e15 = prepare("M3"),
            e16 = prepare("M4"),
            e17 = prepare("G1"),
            e18 = prepare("G3"),
            e19 = prepare("G2"),
            e20 = prepare("G4"),
            e21 = prepare("M1"),
            e22 = prepare("M2"),
            e23 = prepare("B1")


            
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),

            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {

        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_MB1_VV2 = [
            {

                "source": "MB1",
                "target": "VV2"
            },

            {
                "source": "VV2",
                "target": "MB1"
            }
        ];

        var correct_connections_MB1_M3 = [
            {
                "source": "MB1",
                "target": "M3"
            },
    
            {
                "source": "M3",
                "target": "MB1"
            }
        ];
        var correct_connections_M3_M4 = [
            {
                "source": "M3",
                "target": "M4"
            },
    
            {
                "source": "M4",
                "target": "M3"
            }
        ];
        var correct_connections_MB2_VV1 = [
            {
                "source": "MB2",
                "target": "VV1"
            },
    
            {
                "source": "VV1",
                "target": "MB2"
            }
        ];
        var correct_connections_MB2_AA1 = [
            {
                "source": "MB2",
                "target": "AA1"
            },
    
            {
                "source": "AA1",
                "target": "MB2"
            }
        ];

        var correct_connections_S1_AA2 = [
            {
                "source": "S1",
                "target": "AA2"
            },
    
            {
                "source": "AA2",
                "target": "S1"
            }
        ];

        var correct_connections_S2_M2 = [
            {
                "source": "S2",
                "target": "M2"
            },
    
            {
                "source": "M2",
                "target": "S2"
            }
        ];

        var correct_connections_S3_M1 = [
            {
                "source": "M1",
                "target": "S3"
            },
    
            {
                "source": "S3",
                "target": "M1"
            }
        ];

        var correct_connections_B2_G3 = [
            {
                "source": "B2",
                "target": "G3"
            },
    
            {
                "source": "G3",
                "target": "B2"
            }
        ];

        var correct_connections_G3_G4 = [
            {
                "source": "G3",
                "target": "G4"
            },
    
            {
                "source": "G4",
                "target": "G3"
            }
        ];

        var correct_connections_G4_VB2 = [
            {
                "source": "G4",
                "target": "VB2"
            },
    
            {
                "source": "VB2",
                "target": "G4"
            }
        ];

        var correct_connections_B1_VA1 = [
            {
                "source": "B1",
                "target": "VA1"
            },
    
            {
                "source": "VA1",
                "target": "B1"
            }
        ];

        var correct_connections_VA1_AB2 = [
            {
                "source": "VA1",
                "target": "AB2"
            },
    
            {
                "source": "AB2",
                "target": "VA1"
            }
        ];

        var correct_connections_AB1_G1 = [
            {
                "source": "AB1",
                "target": "G1"
            },
    
            {
                "source": "G1",
                "target": "AB1"
            }
        ];

        var correct_connections_AB1_G2 = [
            {
                "source": "AB1",
                "target": "G2"
            },
    
            {
                "source": "G2",
                "target": "AB1"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            
                {
    
                    "source": "MB1",
                    "target": "VV2"
                },
    
                {
                    "source": "VV2",
                    "target": "MB1"
                },
            
    
            
                {
                    "source": "MB1",
                    "target": "M3"
                },
        
                {
                    "source": "M3",
                    "target": "MB1"
                },
            
            
                {
                    "source": "M3",
                    "target": "M4"
                },
        
                {
                    "source": "M4",
                    "target": "M3"
                },
            
            
                {
                    "source": "MB2",
                    "target": "VV1"
                },
        
                {
                    "source": "VV1",
                    "target": "MB2"
                },
            
            
                {
                    "source": "MB2",
                    "target": "AA1"
                },
        
                {
                    "source": "AA1",
                    "target": "MB2"
                },
            
    
            
                {
                    "source": "S1",
                    "target": "AA2"
                },
        
                {
                    "source": "AA2",
                    "target": "S1"
                },
            
    
            
                {
                    "source": "S2",
                    "target": "M2"
                },
        
                {
                    "source": "M2",
                    "target": "S2"
                },
            
    
            
                {
                    "source": "M1",
                    "target": "S3"
                },
        
                {
                    "source": "S3",
                    "target": "M1"
                },
            
    
            
                {
                    "source": "B2",
                    "target": "G3"
                },
        
                {
                    "source": "G3",
                    "target": "B2"
                },
            
    
            
                {
                    "source": "G3",
                    "target": "G4"
                },
        
                {
                    "source": "G4",
                    "target": "G3"
                },
            
    
            
                {
                    "source": "G4",
                    "target": "VB2"
                },
        
                {
                    "source": "VB2",
                    "target": "G4"
                },
            
    
            
                {
                    "source": "B1",
                    "target": "VA1"
                },
        
                {
                    "source": "VA1",
                    "target": "B1"
                },
            
    
            
                {
                    "source": "VA1",
                    "target": "AB2"
                },
        
                {
                    "source": "AB2",
                    "target": "VA1"
                },
            
    
            
                {
                    "source": "AB1",
                    "target": "G1"
                },
        
                {
                    "source": "G1",
                    "target": "AB1"
                },
            
    
            
                {
                    "source": "AB1",
                    "target": "G2"
                },
        
                {
                    "source": "G2",
                    "target": "AB1"
                }
            
    
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_MB1_VV2 = false;
        var is_connected_MB1_M3 = false;
        var is_connected_M3_M4 = false;
        var is_connected_MB2_VV1 = false;
        var is_connected_MB2_AA1 = false;
        var is_connected_S1_AA2 = false;
        var is_connected_S2_M2 = false;
        var is_connected_S3_M1 = false;
        var is_connected_B2_G3 = false;
        var is_connected_G3_G4 = false;
        var is_connected_G4_VB2 = false;
        var is_connected_B1_VA1 = false;
        var is_connected_VA1_AB2 = false;
        var is_connected_AB1_G1 = false;
        var is_connected_AB1_G2 = false;
        var unallowed_connection_present = false;
        

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_MB1_VV2){
                is_connected_MB1_VV2 = correct_connections_MB1_VV2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                }));
            }
            
        });
        //checking for 2_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_MB1_M3){
                is_connected_MB1_M3 = correct_connections_MB1_M3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
            
        });
        //checking for 4_5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_M3_M4){
                is_connected_M3_M4 = correct_connections_M3_M4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
            
        });
        //checking for 6_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_MB2_VV1){
                is_connected_MB2_VV1 = correct_connections_MB2_VV1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
            
        });

        //checking for 8_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_MB2_AA1){
                is_connected_MB2_AA1 = correct_connections_MB2_AA1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_S1_AA2){
                is_connected_S1_AA2 = correct_connections_S1_AA2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_S2_M2){
                is_connected_S2_M2 = correct_connections_S2_M2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_S3_M1){
                is_connected_S3_M1 = correct_connections_S3_M1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_B2_G3){
                is_connected_B2_G3 = correct_connections_B2_G3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_G3_G4){
                is_connected_G3_G4 = correct_connections_G3_G4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_G4_VB2){
                is_connected_G4_VB2 = correct_connections_G4_VB2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_B1_VA1){
                is_connected_B1_VA1 = correct_connections_B1_VA1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_VA1_AB2){
                is_connected_VA1_AB2 = correct_connections_VA1_AB2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_AB1_G1){
                is_connected_AB1_G1 = correct_connections_AB1_G1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_AB1_G2){
                is_connected_AB1_G2 = correct_connections_AB1_G2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            
        });

        if (is_connected_AB1_G1 && is_connected_AB1_G2 && is_connected_B1_VA1 && is_connected_B2_G3 && is_connected_G3_G4 && is_connected_G4_VB2 && is_connected_M3_M4 && is_connected_MB1_M3 && is_connected_MB1_VV2 && is_connected_MB2_AA1 && is_connected_MB2_VV1 && is_connected_S1_AA2 && is_connected_S2_M2 && is_connected_S3_M1 && is_connected_VA1_AB2 && unallowed_connection_present) 
        {
            fnccheck();
            alert("Correct connection");
            document.getElementById("range").disabled=false;
            document.getElementById("rem1").remove();
            document.getElementById("rem2").remove();
            document.getElementById("rem3").remove();
            document.getElementById("rem4").remove();
            document.getElementById("rem5").remove();
            document.getElementById("rem6").remove();
            document.getElementById("rem7").remove();
            document.getElementById("rem8").remove();
            document.getElementById("rem9").remove();
            document.getElementById("rem10").remove();

            document.getElementById('check-button').disabled = true

        } 
        else 
        {
           alert("Wrong connection");
            return;
        } 
    });
});   
}