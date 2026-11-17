/* Datos OEM — Vol. VI / Vol. V. No inventar P/N. */
window.CGDATA = {
  "STORE_V1": "cg-levantamiento-purificadoras-v1",
  "STORE_V2": "cg-levantamiento-purificadoras-v2",
  "EST_INST": [
    "OK",
    "Falta",
    "Dañado",
    "Incompleto",
    "N/A"
  ],
  "EST_TOOL": [
    "Presente y usable",
    "Presente dañada",
    "Perdida",
    "Requiere reemplazo",
    "Requiere fabricación local",
    "N/A"
  ],
  "META_FIELDS": [
    {
      "id": "cliente",
      "label": "Cliente",
      "value": "Caribbean Glass",
      "span": 2
    },
    {
      "id": "planta",
      "label": "Planta / origen",
      "value": "Ex Zanzibar 4.7 MW DPP (Industria Vidrio / Industria Zanzibar S.A.)",
      "span": 2
    },
    {
      "id": "sitio",
      "label": "Sitio de levantamiento",
      "value": "",
      "span": 2
    },
    {
      "id": "proyecto",
      "label": "Proyecto OEM / work no.",
      "value": "EA0071 / PU-HD-0071-41 / HD0071P",
      "span": 2
    },
    {
      "id": "eq_hfo",
      "label": "Equipo HFO (OEM)",
      "value": "SJ30GH — HIDENS, descarga total y parcial — 1 250 L/h — GSH-1 / GBC-1",
      "span": 2
    },
    {
      "id": "eq_lo",
      "label": "Equipo LO (OEM)",
      "value": "SJ20G — descarga total únicamente — 1 500 L/h SAE#40 — GBC-1",
      "span": 2
    },
    {
      "id": "fecha",
      "label": "Fecha del levantamiento",
      "type": "date",
      "value": ""
    },
    {
      "id": "inspector",
      "label": "Inspector",
      "value": ""
    },
    {
      "id": "acompanante",
      "label": "Acompañante del cliente",
      "value": ""
    },
    {
      "id": "firma",
      "label": "Firma",
      "value": "",
      "cls": "sig"
    }
  ],
  "TILES": [
    {
      "id": "datos",
      "title": "Datos del levantamiento",
      "short": "Datos",
      "blurb": "Cliente, sitio, inspector y firma.",
      "icon": "clip"
    },
    {
      "id": "s11",
      "title": "1.1 Tuberías e instrumentación",
      "short": "Tuberías",
      "blurb": "Boquillas N-1 a N-11, equipos, instrumentos y P&ID.",
      "icon": "piping",
      "defaultView": "plano",
      "hasPlan": true
    },
    {
      "id": "s12",
      "title": "1.2 Mecánica",
      "short": "Mecánica",
      "blurb": "Bowl, distribuidor de agua, ejes, bomba y bastidor.",
      "icon": "gear",
      "defaultView": "plano",
      "hasPlan": true
    },
    {
      "id": "s13",
      "title": "1.3 Eléctrico",
      "short": "Eléctrico",
      "blurb": "Potencia 480 V, tablero GSH-1 / GBC-1 y señales.",
      "icon": "bolt"
    },
    {
      "id": "s2",
      "title": "2. Repuestos — kit de sellos",
      "short": "Repuestos",
      "blurb": "O-rings y juntas del bowl y del distribuidor de agua.",
      "icon": "oring"
    },
    {
      "id": "s3",
      "title": "3. Herramientas especiales",
      "short": "Herramientas",
      "blurb": "Utillaje 801–823, por forma.",
      "icon": "wrench",
      "defaultView": "lista",
      "hasPlan": true
    },
    {
      "id": "s5",
      "title": "5. Servicios",
      "short": "Servicios",
      "blurb": "Agua, aire, vapor, 480 V, izaje y área de trabajo.",
      "icon": "plug"
    },
    {
      "id": "s9",
      "title": "9. Go / no-go",
      "short": "Decisión",
      "blurb": "Criterios para programar el overhaul.",
      "icon": "flag"
    }
  ],
  "SECTIONS": [
    {
      "id": "s11",
      "title": "1. Instalación física — 1.1 Tuberías e instrumentación",
      "intro": "Verificar en campo cada boquilla, línea, válvula e instrumento. La planta estuvo parada más de diez años: es previsible que falten tramos, instrumentos o que se hayan canibalizado piezas entre las dos unidades. Las boquillas N-1 a N-11 y los tanques nombrados salen de los diagramas de flujo de cada unidad. La interfaz hacia motores (bomba de suministro HFO, booster, filtro automático, viscosímetro) sale del P&ID de planta del Vol. V. No se encontró un P&ID general de tanques de planta en la carpeta Zanzibar; los nombres de tanques se toman de las tablas de conexiones del Vol. VI.",
      "groups": [
        {
          "title": "Interfaz de proceso — boquillas de cada unidad",
          "items": [
            {
              "id": "n1",
              "label": "N-1 Entrada de aceite sucio",
              "cite": "HFO: Vol. VI p. 9, HDZZB01 — desde tanque de sedimentación HFO (H.F.O. Settling tank), brida ANSI 150 lb 1\" SO.RF. LO: Vol. VI p. 56, HDZZB03 — desde tanque de aceite sucio (L.O. Dirty oil tank), misma brida.",
              "kind": "dual"
            },
            {
              "id": "n2",
              "label": "N-2 Salida de aceite purificado",
              "cite": "HFO: Vol. VI p. 9, HDZZB01 — hacia tanque de servicio HFO (H.F.O. service tank), ANSI 150 lb 1\" SO.RF. LO: Vol. VI p. 56, HDZZB03 — hacia tanque de aceite limpio (L.O. Clean oil tank), misma brida.",
              "kind": "dual"
            },
            {
              "id": "n3",
              "label": "N-3 Circulación (retorno a tanque sucio / sedimentación)",
              "cite": "HFO: Vol. VI p. 9, HDZZB01 — hacia H.F.O. Settling tank. LO: Vol. VI p. 56, HDZZB03 — hacia L.O. Dirty oil tank. Brida ANSI 150 lb 1\" SO.RF.",
              "kind": "dual"
            },
            {
              "id": "n4",
              "label": "N-4 Entrada de vapor al calentador (7 kg/cm²)",
              "cite": "Vol. VI p. 9 / p. 56. Consumo: HFO 47,5 kg/h; LO 58,2 kg/h; 7,0 kg/cm² abs.; 160,6 °C (Vol. VI p. 230–231, UL-1/2 y UL-2/2).",
              "kind": "dual"
            },
            {
              "id": "n5",
              "label": "N-5 Condensado del calentador",
              "cite": "Vol. VI p. 9 / p. 56, brida ANSI 150 lb 1\" SO.RF. Verificar trampa de vapor y retorno de condensado.",
              "kind": "dual"
            },
            {
              "id": "n6",
              "label": "N-6 Agua de operación (water valve unit)",
              "cite": "Vol. VI p. 9 / p. 56. 3,5–5,0 kg/cm², brida ANSI 150 lb ½\" SO.RF. Caudal intermitente: HFO 4,4 L/h; LO 4,8 L/h (p. 230–231).",
              "kind": "dual"
            },
            {
              "id": "n7",
              "label": "N-7 Aire de operación (válvula de 3 vías / AF1)",
              "cite": "Vol. VI p. 9 / p. 56. 5,0–9,0 kg/cm², brida ANSI 150 lb ½\" SO.RF. 0,4 NL/h intermitente (p. 230–231). El P&ID del booster (Vol. V p. 15) también tiene «COMP. AIR IN» / aire de control — comprobar si es la misma red de planta.",
              "kind": "dual"
            },
            {
              "id": "n8",
              "label": "N-8 Salida de lodos (hacia tanque de lodos de la unidad)",
              "cite": "Vol. VI p. 9 / p. 56. Brida ANSI 150 lb 1\" SO.RF.",
              "kind": "dual"
            },
            {
              "id": "n9",
              "label": "N-9 Drenaje del cárter (oil pan drain)",
              "cite": "Vol. VI p. 9 / p. 56. Brida ANSI 150 lb 1\" SO.RF.",
              "kind": "dual"
            },
            {
              "id": "n10",
              "label": "N-10 Rebosadero y drenaje del tanque de lodos",
              "cite": "Vol. VI p. 9 / p. 56. Brida ANSI 150 lb 1\" SO.RF.",
              "kind": "dual"
            },
            {
              "id": "n11",
              "label": "N-11 Respiradero del tanque de lodos",
              "cite": "Vol. VI p. 9 / p. 56. Brida ANSI 150 lb 3\" SO.RF.",
              "kind": "dual"
            }
          ]
        },
        {
          "title": "Tanques y equipos de la unidad (lista de suministro)",
          "items": [
            {
              "id": "tk_set",
              "label": "Tanque de succión / sedimentación (origen de N-1 y destino de N-3)",
              "cite": "HFO: «H.F.O. Settling tank» (Vol. VI p. 9). LO: «L.O. Dirty oil tank» (Vol. VI p. 56). No aparece un P&ID de tanques de planta en la carpeta Zanzibar; confirmar existencia, válvulas de aislamiento y nivel en sitio.",
              "kind": "dual"
            },
            {
              "id": "tk_serv",
              "label": "Tanque de destino del aceite purificado (N-2)",
              "cite": "HFO: «H.F.O. service tank» (Vol. VI p. 9). LO: «L.O. Clean oil tank» (Vol. VI p. 56). Desde el tanque de servicio HFO parte la bomba de suministro hacia el booster (Vol. V p. 15, línea «FR HFO SUPPLY PUMP»).",
              "kind": "dual"
            },
            {
              "id": "sludge_tk",
              "label": "Tanque pequeño de lodos de la unidad (0,5 m³)",
              "cite": "Vol. VI p. 5 (HFO) y p. 52 (LO), ítem 8 de la supply list: con respiradero, sounding gauge y interruptor de nivel alto/bajo. Plano del interruptor: Vol. VI p. 49 / p. 96, RLS-22A2S-WT, MBIT-RLS-04043.",
              "kind": "dual"
            },
            {
              "id": "sludge_pump",
              "label": "Bomba de lodos (Mono screw) + válvulas S-001 / S-002 / S-003",
              "cite": "Supply list ítem 9 (p. 5 / p. 52). Aparece en el diagrama de flujo p. 9 / p. 56. Fabricante National Oilwell / Mono (dibujos p. 45–48 / p. 92–95).",
              "kind": "dual"
            },
            {
              "id": "heater",
              "label": "Calentador de vapor tipo placas (Alfa Laval)",
              "cite": "Supply list ítem 4 (p. 5 / p. 52). Hojas Alfa Laval M6-MFG en p. 37–38 (HFO) y p. 84–85 (LO).",
              "kind": "dual"
            },
            {
              "id": "tcv",
              "label": "Conjunto de regulación de temperatura a la entrada del calentador",
              "cite": "Supply list ítem 5 (p. 5 / p. 52): válvula de control de temperatura + filtro en Y + trampa de vapor. Dibujos: p. 40–43 (HFO), p. 87–90 (LO).",
              "kind": "dual"
            },
            {
              "id": "strainer",
              "label": "Filtro de aceite en la succión",
              "cite": "HFO: dúplex JIS 5K-25A (p. 5 y p. 36). LO: símplex JIS 5K-25A (p. 52 y p. 83). Comprobar que no se hayan intercambiado entre unidades.",
              "kind": "dual"
            },
            {
              "id": "gauge_board",
              "label": "Manifold de manómetros del pump de alimentación (compuesto + presión)",
              "cite": "Supply list ítem 6 (p. 5 / p. 52). Instrumentos: ver programa p. 132.",
              "kind": "dual"
            },
            {
              "id": "cv",
              "label": "Válvula cilíndrica de 3 vías (CV) de alimentación / circulación",
              "cite": "Equipo CV en p. 9 / p. 56. Dibujo HFO p. 32–33; LO p. 79–80.",
              "kind": "dual"
            },
            {
              "id": "wv",
              "label": "Unidad de válvulas de agua (solenoide + reductora)",
              "cite": "HFO: SV1, SV2, SV3 y SV9 (p. 9). LO: SV1, SV2, SV3 únicamente — sin SV9 (p. 56). Lista de partes: p. 31 (HFO), p. 78 (LO).",
              "kind": "dual"
            },
            {
              "id": "av",
              "label": "Válvula de aire y filtro AF1 (SV4 + AF1)",
              "cite": "p. 9 / p. 56; detalle filtro de aire p. 34 / p. 81; solenoide p. 35 / p. 82.",
              "kind": "dual"
            },
            {
              "id": "sight",
              "label": "Visor (sight glass) y placas de goma del bastidor",
              "cite": "Frame & cover parts list, ítems 217–218. HFO Vol. VI p. 15.",
              "kind": "dual"
            },
            {
              "id": "relief",
              "label": "Válvula de alivio tipo high-lift",
              "cite": "Dibujo HFO p. 40; LO p. 87.",
              "kind": "dual"
            }
          ]
        },
        {
          "title": "Instrumentación",
          "items": [
            {
              "id": "ls_hfo",
              "label": "1-1 Interruptor de nivel del tanque de lodos HFO (H/L), Miboa RLS-22A2S-WT",
              "cite": "Vol. VI p. 132 (ítem 1-1) y plano p. 133 (MBIT-RLS-04043, modelo RLS-22A2S-WT, montaje superior JIS 5K-65A). Cantidad de proyecto: 1, solo en la unidad HFO. En la unidad LO marcar N/A en esta fila y usar el ítem 1-2.",
              "kind": "dual"
            },
            {
              "id": "ls_lo",
              "label": "1-2 Interruptor de nivel del tanque de lodos LO (H/L), Miboa RLS-22A2S-WT",
              "cite": "Vol. VI p. 132 (ítem 1-2) y plano p. 133 (MBIT-RLS-04043). Cantidad de proyecto: 1, solo en la unidad LO.",
              "kind": "dual"
            },
            {
              "id": "lm",
              "label": "2-1 / 2-4 Sensor de presión función LM (fugas)",
              "cite": "HFO: MM3, 0,03–0,3 MPa, consigna 0,15 MPa (p. 132, ítem 2-1; plano p. 134, S206912). LO: MM1, mismos valores (ítem 2-4; plano p. 135, S206909). Fabricante MKK, suministrador Samgong.",
              "kind": "dual"
            },
            {
              "id": "dd",
              "label": "2-2 Sensor de presión función DD (detector de descarga) — solo HFO (HIDENS)",
              "cite": "Vol. VI p. 132, ítem 2-2, MM3. No aplica a SJ20G (el OM1 y el diagrama LO no incluyen DD). En LO marcar N/A.",
              "kind": "dual"
            },
            {
              "id": "wd",
              "label": "2-3 Sensor de presión función WD (detector de agua) — solo HFO (HIDENS)",
              "cite": "Vol. VI p. 132, ítem 2-3, MM3, 0–0,4 MPa, consigna 0,1 MPa. No aplica a SJ20G. En LO marcar N/A.",
              "kind": "dual"
            },
            {
              "id": "tt_in",
              "label": "3-1 / 3-3 Termómetro entrada del calentador de vapor, Kother KT-110",
              "cite": "HFO: 0–100 °C, consigna 60 °C (3-1). LO: 0–100 °C, consigna 50 °C (3-3). Ø 75 mm × PT 1/2\". Vol. VI p. 132 (programa HD0071P-IS-1/6) y plano del termómetro p. 136 (DT3131). Conexión / transmisor: p. 44 / p. 91.",
              "kind": "dual"
            },
            {
              "id": "tt_out",
              "label": "3-2 / 3-4 Termómetro salida del calentador, Kother KT-110",
              "cite": "HFO: 0–150 °C, consigna 98 °C (3-2). LO: 0–150 °C, consigna 90 °C (3-4). Vol. VI p. 132 y plano p. 136 (DT3131).",
              "kind": "dual"
            },
            {
              "id": "pg_suc_in",
              "label": "4-1 / 4-7 Manómetro succión bomba de alimentación (compuesto)",
              "cite": "Sigma SG-2000, –76 cmHg a 4 kg/cm², consigna –76 a 0 kg/cm². HFO 4-1; LO 4-7. Vol. VI p. 132 y plano p. 137 (DT3133). Ø 60 mm × PF 1/4\".",
              "kind": "dual"
            },
            {
              "id": "pg_suc_out",
              "label": "4-2 / 4-8 Manómetro descarga bomba de alimentación",
              "cite": "HFO 4-2 (en el programa p. 132 el número aparece como «1-2»; la secuencia y la descripción corresponden a 4-2): Sigma SG-2000, 0–4 kg/cm², consigna 0–2 kg/cm². LO 4-8: mismos rango y consigna. Plano p. 137 (DT3133).",
              "kind": "dual"
            },
            {
              "id": "pg_wat",
              "label": "4-3 / 4-9 Reductora — presión de agua de operación",
              "cite": "HFO 4-3: MKK GSH-1, 0–0,4 MPa, consigna 0,25 MPa, Ø 43 mm × PT 1/8\". LO 4-9: MKK GBC-1, consigna 0,3 MPa, Ø 43 mm × PT 1/8\". Vol. VI p. 132. Comprobar que los manómetros no estén intercambiados (GSH-1 es de la unidad HIDENS). Plano típico p. 137 (DT3133) cubre los Sigma Ø 60 mm; GSH-1/GBC-1 son Ø 43 mm × PT 1/8\".",
              "kind": "dual"
            },
            {
              "id": "pg_circ",
              "label": "4-4 Presión de la línea de circulación — solo HFO",
              "cite": "Samil GV50-173, 0–0,4 MPa, consigna 0,1 MPa, Ø 70 mm × PT 1/4\". Vol. VI p. 132. En LO marcar N/A si no figura equivalente.",
              "kind": "dual"
            },
            {
              "id": "pg_sl_in",
              "label": "4-5 / 4-10 Manómetro succión bomba de lodos",
              "cite": "Sigma SG-2000, –76 cmHg a 4 kg/cm². HFO 4-5; LO 4-10. p. 132.",
              "kind": "dual"
            },
            {
              "id": "pg_sl_out",
              "label": "4-6 / 4-11 Manómetro descarga bomba de lodos",
              "cite": "Sigma SG-2000, 0–4 kg/cm², consigna 0–2. HFO 4-6; LO 4-11. p. 132.",
              "kind": "dual"
            }
          ]
        }
      ]
    },
    {
      "id": "s12",
      "title": "1. Instalación física — 1.2 Mecánica (la purificadora y sus elementos)",
      "intro": "Recorrer el equipo de fuera hacia adentro. Registrar números de serie (no figuran en las portadas ni en las primeras hojas de inspección del Vol. VI). Buscar indicios de canibalización entre las dos máquinas (piezas, discos, bombas, sensores o tapas intercambiadas).",
      "groups": [
        {
          "title": "Identificación y bancada",
          "items": [
            {
              "id": "nameplate",
              "label": "Placa de características: transcribir modelo, nº de fabricación / serie, año, rpm, kW",
              "cite": "Los identificadores de proyecto son PU-HD-0071-41, EA0071, HD0071P; los reportes de inspección son SGPU0502-001 (FO) y SGPU0502-002 (LO) (Vol. VI p. 277 y p. 311). El número de serie del bowl o de la máquina no apareció en las páginas revisadas — hay que levantarlo en sitio.",
              "kind": "dual"
            },
            {
              "id": "serial_note",
              "label": "Nº de serie / fabricación anotado en campo (bowl, bastidor y motor)",
              "cite": "Campo libre: anotar en observaciones y en la referencia fotográfica. Criterio del levantamiento.",
              "kind": "dual",
              "criterio": true
            },
            {
              "id": "bed",
              "label": "Bancada común (common bed) y anclajes / antivibratorios",
              "cite": "Supply list ítem 10, Vol. VI p. 5 / p. 52. Outline: p. 10 (HFO, HDZZB02) y p. 57 (LO, HDZZB04).",
              "kind": "dual"
            },
            {
              "id": "cannibal",
              "label": "Indicios de canibalización entre las dos unidades (piezas cruzadas, bridas ciegas, cables sueltos, huecos)",
              "cite": "La planta estuvo parada más de diez años. Comparar en sitio modelo, sensores (DD/WD solo en HFO), filtro dúplex vs. símplex, manómetro GSH-1 vs. GBC-1 y P/N de herramientas 802. Criterio técnico.",
              "kind": "dual",
              "criterio": true
            }
          ]
        },
        {
          "title": "Conjunto mecánico",
          "items": [
            {
              "id": "frame_cover",
              "label": "Bastidor y tapa (frame & cover), incluyendo tuerca de tapa y visores",
              "cite": "HFO: p. 14–16 (S206353, SG220301/02). LO: p. 61–63. Desarme de tapa: MM p. 611 (2-3).",
              "kind": "dual"
            },
            {
              "id": "bowl",
              "label": "Bowl completo: cuerpo, cilindro principal, capota, cámaras de líquido ligero y pesado",
              "cite": "HFO: conjunto p. 18 (S206346), lista p. 19 (SG100301). LO: p. 65–66 (SG100201). P/N del cuerpo distintos: HFO 130637001 / LO 131386001. Desarme MM p. 613 (2-5); arme p. 642 (2-34).",
              "kind": "dual"
            },
            {
              "id": "discs",
              "label": "Paquete de discos (disc stack), disco superior, top disc, tuerca de discos",
              "cite": "Ítems 111–113 y 122 de la lista del bowl, p. 19 / p. 66. La holgura de apilado (3 a 5 mm sobre el distributor) está en MM p. 643 (2-35).",
              "kind": "dual"
            },
            {
              "id": "gdisc",
              "label": "Disco de gravedad instalado: anotar Ø interior y P/N",
              "cite": "Listas de discos suministrados al proyecto: Vol. VI p. 271 (SJ30G/GH) y p. 274 (SJ20G/GH). Procedimiento de selección: OM2 p. 430–437 (nomogramas FO A: SJ20 p. 436, SJ30 p. 437).",
              "kind": "dual"
            },
            {
              "id": "distrib",
              "label": "Distributor (ítem 108) y chaveta / pasadores del bowl",
              "cite": "Lista del bowl p. 19 / p. 66. P/N distintos: HFO 131449001 / LO 205560001.",
              "kind": "dual"
            },
            {
              "id": "mainseal",
              "label": "Sello principal (main seal ring, ítem 118) y estado de la superficie de sellado",
              "cite": "HFO 455879001; LO 455837001. p. 19 / p. 66 y lista de un año p. 244 / p. 253.",
              "kind": "dual"
            },
            {
              "id": "vshaft",
              "label": "Eje vertical, rodamientos, resortes y carcasas (ítems 501–539) — inspección visual, no se pide kit de sellos de este eje",
              "cite": "Lista HFO p. 21 (SG400301); LO p. 68 (SG400201). Desarme MM p. 633 (2-25). No forma parte del kit de overhaul de la sección 2.",
              "kind": "dual"
            },
            {
              "id": "water_dist",
              "label": "Distribuidor / cámara de agua de operación (ítems 701–711: disco, tobera, cámara, tapa, junta 708 y packing 711)",
              "cite": "Aparece al pie de la lista del eje vertical (p. 21 / p. 68), pero es el conjunto de agua de operación, no el eje propiamente dicho. MM: dispositivo de agua p. 630 (2-22).",
              "kind": "dual"
            },
            {
              "id": "hshaft",
              "label": "Eje horizontal, engranaje espiral, freno y tacos de fricción",
              "cite": "HFO: p. 22–23 (S206349, SG300301). LO: p. 69–70. MM p. 624 (2-16) y p. 667 (4-11). Tacos 621: 385078105 (60 Hz), p. 23 y p. 247.",
              "kind": "dual"
            },
            {
              "id": "gpump",
              "label": "Bomba de engranajes GP20G, acoplamiento / safety joint, holgura del detector 1 ± 0,3 mm",
              "cite": "Supply y planos de bomba p. 24–25 (HFO), p. 71–72 (LO). MM arme p. 649 (2-41). Ambas unidades llevan GP20G.",
              "kind": "dual"
            },
            {
              "id": "motor",
              "label": "Motor de inducción, acoplamiento y anclajes",
              "cite": "HFO: 7,5 kW, 1 765 rpm, AC 480 V 60 Hz 3Ph (especificaciones p. 6–8). LO: 5,5 kW, 1 770 rpm (p. 53–54). Hoja del motor p. 26 / p. 73.",
              "kind": "dual"
            },
            {
              "id": "brake",
              "label": "Freno de mano (brake handle, lining, shaft)",
              "cite": "Lista eje horizontal p. 23, ítems 232–240.",
              "kind": "dual"
            },
            {
              "id": "mm_dev",
              "label": "Multi-Monitor (MM3 en HFO con LM/DD/WD; MM1 en LO con LM)",
              "cite": "Dibujo HFO p. 27; LO p. 74. OM1 contenidos p. 351–353. Comprobar que el de HIDENS no haya sido puesto en la unidad LO.",
              "kind": "dual"
            }
          ]
        }
      ]
    },
    {
      "id": "s13",
      "title": "1. Instalación física — 1.3 Eléctrico (potencia y control)",
      "intro": "HFO opera con panel / funciones GSH-1 (HIDENS, descarga total y parcial) y el paquete declara control GBC-1 y GSH-1 (MM p. 599–600; OM3 p. 528–594). LO es tipo G, total only, asociado a GBC-1. Tensión de alimentación del diagrama: AC 480 V, 60 Hz, 3 fases (p. 9).",
      "groups": [
        {
          "title": "Potencia",
          "items": [
            {
              "id": "pwr_cable",
              "label": "Acometida AC 480 V / 60 Hz / 3Ph hasta el arrancador de cada unidad",
              "cite": "Vol. VI p. 9 (electric power source). Horarios de cables: a partir de p. 138.",
              "kind": "dual"
            },
            {
              "id": "breaker",
              "label": "Interruptores / protecciones en tablero de planta hacia los motores (purificadora y bomba de lodos)",
              "cite": "Supply list ítem 2: Group Starter & Control Panel «For Purifier Motor & Sludge Delivery Pump» (p. 5 / p. 52). El detalle de breakers de planta no está en el Vol. VI; criterio técnico si solo se verifica presencia.",
              "kind": "dual",
              "criterio": true
            },
            {
              "id": "starter",
              "label": "Arrancador del motor (group starter) y estado de contactores / relé térmico",
              "cite": "p. 5 / p. 52 y OM1 cap. 4 (p. 351–352). Repuestos de tablero en p. 251 (contactores LG GMC 32 y 9, relé Honeywell SZR-MY4-N1, relé de tiempo Omron H3BA).",
              "kind": "dual"
            },
            {
              "id": "mot_term",
              "label": "Caja de bornes del motor, prensaestopas y puesta a tierra",
              "cite": "Hoja del motor p. 26 / p. 73 y criterio de buena práctica.",
              "kind": "dual",
              "criterio": true
            }
          ]
        },
        {
          "title": "Control, sensores y alarmas",
          "items": [
            {
              "id": "panel",
              "label": "Tablero de control GBC-1 / GSH-1, lámparas, pulsadores, selector y fusibles",
              "cite": "Lista de repuestos del panel, Vol. VI p. 251 (SPGCP90): pulsadores Telemechanique, lámparas, selector, fusibles Legrand 10×38 (1–6 A). Placa del tablero HFO: p. 142 (SPGCP07). HFO debe corresponder a GSH-1 (parcial); LO a GBC-1.",
              "kind": "dual"
            },
            {
              "id": "sol_wiring",
              "label": "Cableado a solenoides de agua (SV1–SV3 / SV9) y de aire (SV4)",
              "cite": "p. 9 / p. 56; dibujos eléctricos a partir de p. 98; interface HFO p. 139 (SPGCP03); circuitos p. 143–145 (SPGCP11–13, el 3/3 es arrancador de la bomba de lodos y común).",
              "kind": "dual"
            },
            {
              "id": "alarms",
              "label": "Alarmas y señales del Multi-Monitor (LM; en HFO además DD y WD) y del interruptor de nivel del tanque de lodos",
              "cite": "p. 132 e OM1 cap. 5 (p. 353).",
              "kind": "dual"
            },
            {
              "id": "timers",
              "label": "Temporizadores del panel (ajuste GBC-1 / GSH-1)",
              "cite": "OM2 3.8.1–3.8.2, p. 478 / p. 480 (3-51 / 3-53). En este levantamiento solo verificar que el hardware esté presente; no se pide afinar tiempos.",
              "kind": "dual"
            },
            {
              "id": "gnd",
              "label": "Continuidad de tierras y estado general de cables (cortes, empalmes improvisados, bornes sueltos)",
              "cite": "Criterio técnico, planta larga parada.",
              "kind": "dual",
              "criterio": true
            }
          ]
        }
      ]
    },
    {
      "id": "s4",
      "title": "4. Condiciones del sitio y seguridad (LOTO)",
      "intro": "Criterio técnico de preparación del overhaul, no aparece como lista en el manual OEM.",
      "criterio": true,
      "items": [
        {
          "id": "loto",
          "label": "Permiso de trabajo, LOTO de potencia 480 V, vapor, aire y líneas de combustible/aceite caliente",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "confined",
          "label": "Acceso al bowl y al tanque de lodos: espacios confinados, ventilación, medición de atmósfera",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "ppe",
          "label": "EPP (impacto, químico, térmico, ocular) y ducha / lavaojos próximos",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "hot",
          "label": "Riesgo de HFO residual, lodos y superficies con aislante de vapor en mal estado",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "access",
          "label": "Acceso físico a las dos máquinas (escaleras, plataformas, desmontaje de protecciones)",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        }
      ],
      "groups": [
        {
          "title": "4. Condiciones del sitio y seguridad (LOTO)",
          "items": [
            {
              "id": "loto",
              "label": "Permiso de trabajo, LOTO de potencia 480 V, vapor, aire y líneas de combustible/aceite caliente",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "confined",
              "label": "Acceso al bowl y al tanque de lodos: espacios confinados, ventilación, medición de atmósfera",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "ppe",
              "label": "EPP (impacto, químico, térmico, ocular) y ducha / lavaojos próximos",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "hot",
              "label": "Riesgo de HFO residual, lodos y superficies con aislante de vapor en mal estado",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "access",
              "label": "Acceso físico a las dos máquinas (escaleras, plataformas, desmontaje de protecciones)",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            }
          ]
        }
      ]
    },
    {
      "id": "s5",
      "title": "5. Servicios disponibles para ejecutar el overhaul",
      "intro": "Sin estos servicios no se puede programar el trabajo con certeza. Caudales de agua, aire y vapor de las unidades: Vol. VI p. 230–231. Izaje y área: criterio técnico.",
      "items": [
        {
          "id": "srv_w",
          "label": "Agua dulce a 3,5–5,0 kg/cm² disponible en N-6 (intermitente, 4,4 / 4,8 L/h de diseño)",
          "cite": "Vol. VI p. 230–231",
          "kind": "single"
        },
        {
          "id": "srv_air",
          "label": "Aire seco a 5,0–9,0 kg/cm² en N-7 (0,4 NL/h de diseño). El Vol. V incluye compresor y secador a partir de p. 531.",
          "cite": "Vol. VI p. 230–231; Vol. V p. 531–613",
          "kind": "single"
        },
        {
          "id": "srv_steam",
          "label": "Vapor a 7 kg/cm² / 160,6 °C para los calentadores (47,5 / 58,2 kg/h)",
          "cite": "Vol. VI p. 230–231",
          "kind": "single"
        },
        {
          "id": "srv_pwr",
          "label": "Energía 480 V / 60 Hz / 3Ph estable para pruebas de arranque (≤ 6 min, Vol. VI p. 226)",
          "cite": "Vol. VI p. 9 y p. 226",
          "kind": "single"
        },
        {
          "id": "srv_crane",
          "label": "Medios de izaje para bowl, motor y tapa (capacidad y acceso)",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "srv_area",
          "label": "Área de trabajo limpia, cubierta, con mesa y bandejas para el disc stack",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "srv_clean",
          "label": "Medios de limpieza (solventes compatibles, agua caliente, aire seco, gestión de lodos y HFO residual)",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        }
      ],
      "groups": [
        {
          "title": "5. Servicios disponibles para ejecutar el overhaul",
          "items": [
            {
              "id": "srv_w",
              "label": "Agua dulce a 3,5–5,0 kg/cm² disponible en N-6 (intermitente, 4,4 / 4,8 L/h de diseño)",
              "cite": "Vol. VI p. 230–231",
              "kind": "single"
            },
            {
              "id": "srv_air",
              "label": "Aire seco a 5,0–9,0 kg/cm² en N-7 (0,4 NL/h de diseño). El Vol. V incluye compresor y secador a partir de p. 531.",
              "cite": "Vol. VI p. 230–231; Vol. V p. 531–613",
              "kind": "single"
            },
            {
              "id": "srv_steam",
              "label": "Vapor a 7 kg/cm² / 160,6 °C para los calentadores (47,5 / 58,2 kg/h)",
              "cite": "Vol. VI p. 230–231",
              "kind": "single"
            },
            {
              "id": "srv_pwr",
              "label": "Energía 480 V / 60 Hz / 3Ph estable para pruebas de arranque (≤ 6 min, Vol. VI p. 226)",
              "cite": "Vol. VI p. 9 y p. 226",
              "kind": "single"
            },
            {
              "id": "srv_crane",
              "label": "Medios de izaje para bowl, motor y tapa (capacidad y acceso)",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "srv_area",
              "label": "Área de trabajo limpia, cubierta, con mesa y bandejas para el disc stack",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "srv_clean",
              "label": "Medios de limpieza (solventes compatibles, agua caliente, aire seco, gestión de lodos y HFO residual)",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            }
          ]
        }
      ]
    },
    {
      "id": "s6",
      "title": "6. Consumibles de campo",
      "intro": "No figuran como lista de proyecto en el Vol. VI salvo lo implícito en el MM (p. ej. Molycoat en el arme del bowl, p. 643). Se listan como criterio técnico.",
      "criterio": true,
      "items": [
        {
          "id": "cons_moly",
          "label": "Lubricante tipo MOLYCOAT para el cilindro principal y superficies de deslizamiento del bowl",
          "cite": "MM p. 643 menciona MOLYCOAT; la marca comercial exacta de reposición es criterio técnico.",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "cons_oil",
          "label": "Aceite de engranajes del cárter (cantidad y grado según OM2 cap. 3.4, a confirmar en sitio)",
          "cite": "OM2 3.4, a partir de p. 461 (3-35). Si no se lee la página de grado en campo, anotar como pendiente.",
          "kind": "single"
        },
        {
          "id": "cons_clean",
          "label": "Paños, solvente, cepillos para discos, bolsas para lodos",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "cons_gask",
          "label": "Juntas de brida ANSI 150 lb (1\", ½\", 3\") de recambio para N-1 a N-11 si se desmontan líneas",
          "cite": "criterio técnico, dimensiones tomadas de p. 9 / p. 56",
          "kind": "single",
          "criterio": true
        }
      ],
      "groups": [
        {
          "title": "6. Consumibles de campo",
          "items": [
            {
              "id": "cons_moly",
              "label": "Lubricante tipo MOLYCOAT para el cilindro principal y superficies de deslizamiento del bowl",
              "cite": "MM p. 643 menciona MOLYCOAT; la marca comercial exacta de reposición es criterio técnico.",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "cons_oil",
              "label": "Aceite de engranajes del cárter (cantidad y grado según OM2 cap. 3.4, a confirmar en sitio)",
              "cite": "OM2 3.4, a partir de p. 461 (3-35). Si no se lee la página de grado en campo, anotar como pendiente.",
              "kind": "single"
            },
            {
              "id": "cons_clean",
              "label": "Paños, solvente, cepillos para discos, bolsas para lodos",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "cons_gask",
              "label": "Juntas de brida ANSI 150 lb (1\", ½\", 3\") de recambio para N-1 a N-11 si se desmontan líneas",
              "cite": "criterio técnico, dimensiones tomadas de p. 9 / p. 56",
              "kind": "single",
              "criterio": true
            }
          ]
        }
      ]
    },
    {
      "id": "s7",
      "title": "7. Documentación disponible en sitio",
      "items": [
        {
          "id": "doc_v6",
          "label": "Copia del Volume VI (o al menos diagramas de flujo, listas de partes y MM) en la planta",
          "cite": "Vol. VI, archivo VOL 6.pdf",
          "kind": "single"
        },
        {
          "id": "doc_v5",
          "label": "Copia del P&ID del booster (Vol. V p. 15) y del esquema de la bomba de suministro HFO",
          "cite": "Vol. V",
          "kind": "single"
        },
        {
          "id": "doc_serial",
          "label": "Historial, reportes SGPU0502-001 / 002, u hojas de vida con números de serie",
          "cite": "Vol. VI p. 277–345",
          "kind": "single"
        },
        {
          "id": "doc_disc",
          "label": "Registro del Ø de gravity disc actualmente instalado en cada máquina",
          "cite": "p. 271 / p. 274 y OM2 p. 430+",
          "kind": "single"
        }
      ],
      "groups": [
        {
          "title": "7. Documentación disponible en sitio",
          "items": [
            {
              "id": "doc_v6",
              "label": "Copia del Volume VI (o al menos diagramas de flujo, listas de partes y MM) en la planta",
              "cite": "Vol. VI, archivo VOL 6.pdf",
              "kind": "single"
            },
            {
              "id": "doc_v5",
              "label": "Copia del P&ID del booster (Vol. V p. 15) y del esquema de la bomba de suministro HFO",
              "cite": "Vol. V",
              "kind": "single"
            },
            {
              "id": "doc_serial",
              "label": "Historial, reportes SGPU0502-001 / 002, u hojas de vida con números de serie",
              "cite": "Vol. VI p. 277–345",
              "kind": "single"
            },
            {
              "id": "doc_disc",
              "label": "Registro del Ø de gravity disc actualmente instalado en cada máquina",
              "cite": "p. 271 / p. 274 y OM2 p. 430+",
              "kind": "single"
            }
          ]
        }
      ]
    },
    {
      "id": "s8",
      "title": "8. Preguntas pendientes al cliente",
      "intro": "Responder antes de firmar el programa de trabajo.",
      "criterio": true,
      "items": [
        {
          "id": "q1",
          "label": "¿Dónde están hoy las herramientas especiales y el stock de sellos de un año? ¿Se pueden inspeccionar en este levantamiento?",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "q2",
          "label": "¿Se movieron piezas de una purificadora a la otra, o se desmontaron líneas/instrumentos durante la parada?",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "q3",
          "label": "¿El tanque de sedimentación HFO, el de servicio HFO y los tanques dirty/clean de LO siguen en servicio y con válvulas operables?",
          "cite": "Vol. VI p. 9 / p. 56",
          "kind": "single"
        },
        {
          "id": "q4",
          "label": "¿Hay vapor, aire seco y 480 V disponibles en la fecha prevista, o hay que coordinar otra área?",
          "cite": "Vol. VI p. 230–231",
          "kind": "single"
        },
        {
          "id": "q5",
          "label": "¿El alcance incluye solo las dos purificadoras, o también calentadores, bombas de lodos y/o el booster?",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        },
        {
          "id": "q6",
          "label": "Ventana de trabajo, permisos de contratista y restricciones de la planta (turnos, izaje, residuos)",
          "cite": "criterio técnico",
          "kind": "single",
          "criterio": true
        }
      ],
      "groups": [
        {
          "title": "8. Preguntas pendientes al cliente",
          "items": [
            {
              "id": "q1",
              "label": "¿Dónde están hoy las herramientas especiales y el stock de sellos de un año? ¿Se pueden inspeccionar en este levantamiento?",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "q2",
              "label": "¿Se movieron piezas de una purificadora a la otra, o se desmontaron líneas/instrumentos durante la parada?",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "q3",
              "label": "¿El tanque de sedimentación HFO, el de servicio HFO y los tanques dirty/clean de LO siguen en servicio y con válvulas operables?",
              "cite": "Vol. VI p. 9 / p. 56",
              "kind": "single"
            },
            {
              "id": "q4",
              "label": "¿Hay vapor, aire seco y 480 V disponibles en la fecha prevista, o hay que coordinar otra área?",
              "cite": "Vol. VI p. 230–231",
              "kind": "single"
            },
            {
              "id": "q5",
              "label": "¿El alcance incluye solo las dos purificadoras, o también calentadores, bombas de lodos y/o el booster?",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            },
            {
              "id": "q6",
              "label": "Ventana de trabajo, permisos de contratista y restricciones de la planta (turnos, izaje, residuos)",
              "cite": "criterio técnico",
              "kind": "single",
              "criterio": true
            }
          ]
        }
      ]
    }
  ],
  "SPARES": [
    {
      "no": "102",
      "name": "O-ring",
      "mat": "Viton",
      "qty": 1,
      "hfo": "455859001",
      "lo": "455859001",
      "cite": "Lista bowl p. 19 / p. 66; un año p. 244 / p. 253"
    },
    {
      "no": "107",
      "name": "O-ring",
      "mat": "NBR",
      "qty": 1,
      "hfo": "455878002",
      "lo": "455836002",
      "cite": "p. 19 / p. 66; p. 244 / p. 253 — P/N distintos por modelo"
    },
    {
      "no": "114",
      "name": "O-ring",
      "mat": "NBR",
      "qty": 1,
      "hfo": "A30070B",
      "lo": "A30070B",
      "cite": "p. 19 / p. 66; p. 244 / p. 253"
    },
    {
      "no": "116",
      "name": "O-ring",
      "mat": "NBR",
      "qty": 1,
      "hfo": "A80243B",
      "lo": "A80243B",
      "cite": "p. 19 / p. 66; p. 244 / p. 253"
    },
    {
      "no": "117",
      "name": "O-ring",
      "mat": "NBR",
      "qty": 1,
      "hfo": "455883001",
      "lo": "455882001",
      "cite": "p. 19 / p. 66; p. 244 / p. 253 — P/N distintos por modelo"
    },
    {
      "no": "118",
      "name": "Main seal ring",
      "mat": "Nylon",
      "qty": 1,
      "hfo": "455879001",
      "lo": "455837001",
      "cite": "p. 19 / p. 66; p. 244 / p. 253 — P/N distintos por modelo"
    },
    {
      "no": "126",
      "name": "O-ring (pilot / detalle A)",
      "mat": "Viton",
      "qty": 4,
      "hfo": "A10011F",
      "lo": "A10011F",
      "cite": "p. 19 / p. 66; p. 244 / p. 253"
    },
    {
      "no": "127",
      "name": "O-ring",
      "mat": "Viton",
      "qty": 4,
      "hfo": "A42017F",
      "lo": "A42017F",
      "cite": "p. 19 / p. 66; p. 244 / p. 253"
    },
    {
      "no": "129",
      "name": "O-ring",
      "mat": "Viton",
      "qty": 2,
      "hfo": "A42017F",
      "lo": "A42017F",
      "cite": "p. 19 / p. 66; p. 244 / p. 253"
    },
    {
      "no": "130",
      "name": "Valve sheet",
      "mat": "Nylon",
      "qty": 2,
      "hfo": "436000001",
      "lo": "436000001",
      "cite": "p. 19 / p. 66; un año p. 245 / p. 254"
    },
    {
      "no": "131",
      "name": "O-ring",
      "mat": "Viton",
      "qty": 2,
      "hfo": "A41013F",
      "lo": "A41013F",
      "cite": "p. 19 / p. 66; p. 245 / p. 254"
    },
    {
      "no": "133",
      "name": "Packing",
      "mat": "Teflon",
      "qty": 1,
      "hfo": "455812001",
      "lo": "455812001",
      "cite": "p. 19 / p. 66; p. 245 / p. 254"
    },
    {
      "no": "708",
      "name": "O-ring del distribuidor de agua de operación",
      "mat": "NBR",
      "qty": 2,
      "hfo": "A90080A",
      "lo": "A90080A",
      "cite": "Lista eje vertical ítem 708, p. 21 / p. 68; un año p. 247. No incluye eje ni rodamientos 501–539."
    },
    {
      "no": "711",
      "name": "Packing del distribuidor de agua de operación",
      "mat": "Fiber",
      "qty": 1,
      "hfo": "436155001",
      "lo": "436155001",
      "cite": "Ítem 711, p. 21 / p. 68; un año p. 247."
    }
  ],
  "TOOLS": [
    {
      "no": "801",
      "name": "Dismantling stand",
      "qty": 1,
      "hfo": "200876102S",
      "lo": "200876102S",
      "cite": "Vol. VI p. 262 / p. 266, SGTL0301A / SGTL0201A"
    },
    {
      "no": "802",
      "name": "Bowl nut handle",
      "qty": 1,
      "hfo": "337154102",
      "lo": "337152102",
      "cite": "p. 262 (HFO, A=378) / p. 266 (LO, A=365) — P/N distintos"
    },
    {
      "no": "803",
      "name": "Jack (1)",
      "qty": 1,
      "hfo": "337150102",
      "lo": "337150102",
      "cite": "p. 262 / p. 266"
    },
    {
      "no": "804",
      "name": "Disc nut handle",
      "qty": 1,
      "hfo": "205577001",
      "lo": "205577001",
      "cite": "p. 262 / p. 266"
    },
    {
      "no": "805",
      "name": "Light liquid chamber handle",
      "qty": 1,
      "hfo": "337151001",
      "lo": "337151001",
      "cite": "p. 262 / p. 266"
    },
    {
      "no": "807",
      "name": "Disc clamp plate",
      "qty": 1,
      "hfo": "455915103",
      "lo": "455915103",
      "cite": "p. 262 / p. 266"
    },
    {
      "no": "808",
      "name": "Cap nut spanner",
      "qty": 1,
      "hfo": "317434103",
      "lo": "317434103",
      "cite": "p. 262 / p. 266"
    },
    {
      "no": "809",
      "name": "Jack (3)",
      "qty": 1,
      "hfo": "451096103",
      "lo": "451096103",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "810",
      "name": "Main seal ring cutter",
      "qty": 1,
      "hfo": "450522001",
      "lo": "450522001",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "811",
      "name": "Bolt (para el cutter / utillaje)",
      "qty": 2,
      "hfo": "436193001",
      "lo": "436193001",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "812",
      "name": "Protective plate",
      "qty": 1,
      "hfo": "450512001",
      "lo": "450512001",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "813",
      "name": "Jack (5)",
      "qty": 1,
      "hfo": "436194001",
      "lo": "436194001",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "814",
      "name": "Jack (6)",
      "qty": 1,
      "hfo": "436177001",
      "lo": "436177001",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "815",
      "name": "Jack (7)",
      "qty": 1,
      "hfo": "436199001",
      "lo": "436199001",
      "cite": "p. 263 / p. 267"
    },
    {
      "no": "816",
      "name": "Jack (8)",
      "qty": 1,
      "hfo": "436195001",
      "lo": "436195001",
      "cite": "p. 264 / p. 268"
    },
    {
      "no": "817",
      "name": "Jack (10)",
      "qty": 1,
      "hfo": "436196001",
      "lo": "436196001",
      "cite": "p. 264 / p. 268"
    },
    {
      "no": "818",
      "name": "Hook spanner",
      "qty": 1,
      "hfo": "450760001",
      "lo": "450760001",
      "cite": "p. 264 / p. 268"
    },
    {
      "no": "819",
      "name": "Push bolt",
      "qty": 1,
      "hfo": "450508001",
      "lo": "450508001",
      "cite": "p. 264 / p. 268"
    },
    {
      "no": "820",
      "name": "Push bolt (5)",
      "qty": 2,
      "hfo": "450758001",
      "lo": "450758001",
      "cite": "p. 264 / p. 268"
    },
    {
      "no": "821",
      "name": "Jack (4)",
      "qty": 1,
      "hfo": "316158102",
      "lo": "316158102",
      "cite": "p. 264 / p. 268"
    },
    {
      "no": "822",
      "name": "822 (SJ50G~SJ150G)",
      "qty": 0,
      "hfo": "—",
      "lo": "—",
      "cite": "No figura en las listas SGTL0301A (SJ30G/GH, Vol. VI p. 262–264) ni SGTL0201A (SJ20G/GH, p. 266–268). Aplica a SJ50G~SJ150G; no aplica a las unidades de Caribbean Glass.",
      "naDefault": true,
      "naNote": "N/A — no aplica a SJ20G / SJ30GH (solo SJ50G~SJ150G). No hay croquis en las listas de este manual."
    },
    {
      "no": "823",
      "name": "Handle (1)",
      "qty": 1,
      "hfo": "436176001",
      "lo": "436176001",
      "cite": "p. 264 / p. 268"
    }
  ],
  "GOITEMS": [
    {
      "id": "go1",
      "label": "Tuberías N-1 a N-11 y tanques de succión/descarga existen y pueden aislarse en ambas unidades.",
      "cite": "Vol. VI p. 9 / p. 56"
    },
    {
      "id": "go2",
      "label": "Alimentación 480 V, vapor y aire de operación están (o estarán) disponibles para pruebas.",
      "cite": "p. 230–231 y p. 226"
    },
    {
      "id": "go3",
      "label": "Se dispondrá de un kit completo de sellos de bowl + distribuidor de agua por máquina (sección 2), con P/N correctos por modelo (ojo: 107, 117 y 118 son distintos).",
      "cite": "p. 19 / p. 66 y p. 244–247 / p. 253–254"
    },
    {
      "id": "go4",
      "label": "Herramientas especiales inventariadas: las faltantes o dañadas tienen plan de reposición o fabricación local antes de la fecha de inicio. Estas herramientas son de calidad mediocre y, tras más de diez años, es probable que estén dañadas o perdidas.",
      "cite": "p. 261–268"
    },
    {
      "id": "go5",
      "label": "No hay canibalización no resuelta que impida armar dos máquinas completas (o el faltante está listado y acopiado).",
      "cite": "criterio técnico"
    },
    {
      "id": "go6",
      "label": "Números de serie / placa leídos y contrastados con el modelo OEM (HFO = SJ30GH, LO = SJ20G). Si la propuesta de overhaul invertía HFO/LO, prevalece el OEM.",
      "cite": "Vol. VI p. 4–8 y p. 51–54"
    }
  ]
};
