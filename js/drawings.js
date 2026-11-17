/* Interactive drawings v3 — clean line-art replicas of the OEM sheets
   with tappable hotspots. Primary P&ID: Vol. VI p. 359, OM 1, Fig. 2-1.
   Names come from the source legend or parts list (page cited).
   If the manual has no description, the sheet says so — nothing is invented. */
window.CGDRAW = (function(){
  function esc(s){return String(s||"").replace(/[&<>"]/g,c=>({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" }[c]));}
  function asset(p){ if(!p) return ""; return (window.CG_ASSETS && window.CG_ASSETS[p]) || p; }

  const FIG21 = {
  "id": "fig21",
  "title": "Fig. 2-1 Configuración del sistema",
  "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
  "image": "assets/diagrams/fig21.png",
  "display": [
    2200,
    2063
  ],
  "intro_en": "Fig. 2-1 shows a typical purifying system configuration with the automatic GSH-1 (HIDENS) specification of SELFJECTOR.",
  "intro_es": "La Fig. 2-1 muestra una configuración típica del sistema de purificación con la especificación automática GSH-1 (HIDENS).",
  "note_en": "Automatic GBC-1 specifications are not provided with Water Detector (WD) and solenoid valve (SV9). Also, Discharge Detector (DD) is optional for these specifications.",
  "note_es": "En la especificación automática GBC-1 no se suministran el detector de agua (WD) ni la válvula solenoide SV9. El detector de descarga (DD) es opcional.",
  "hots": [
    {
      "id": "fig21.1",
      "x": 0.472,
      "y": 0.395,
      "w": 0.06,
      "h": 0.07,
      "en": "1 · SELFJECTOR",
      "es": "Autopurificadora",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "balloon",
      "maps": "bowl"
    },
    {
      "id": "fig21.2",
      "x": 0.508,
      "y": 0.548,
      "w": 0.055,
      "h": 0.065,
      "en": "2 · Gear pump",
      "es": "Bomba de engranajes",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.1, p. 360 (2-2)",
      "kind": "balloon",
      "maps": "gpump"
    },
    {
      "id": "fig21.3",
      "x": 0.188,
      "y": 0.317,
      "w": 0.06,
      "h": 0.07,
      "en": "3 · Solenoid valves unit for operating water",
      "es": "Unidad de válvulas solenoides de agua de operación",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "balloon",
      "maps": "wv"
    },
    {
      "id": "fig21.4",
      "x": 0.708,
      "y": 0.348,
      "w": 0.055,
      "h": 0.065,
      "en": "4 · 3-way cylinder valve (Feed valve)",
      "es": "Válvula cilíndrica de 3 vías (alimentación)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.3, p. 360 (2-2)",
      "kind": "balloon",
      "maps": "cv"
    },
    {
      "id": "fig21.5",
      "x": 0.905,
      "y": 0.274,
      "w": 0.055,
      "h": 0.065,
      "en": "5 · 3-way solenoid valve",
      "es": "Válvula solenoide de 3 vías",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / Vol. VI p. 32, SCVAFSV (SOLENOID VALVE SV4)",
      "kind": "balloon",
      "maps": "av"
    },
    {
      "id": "fig21.6",
      "x": 0.552,
      "y": 0.478,
      "w": 0.055,
      "h": 0.065,
      "en": "6 · Multi-Monitor",
      "es": "Multi-Monitor",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.4, p. 360 (2-2)",
      "kind": "balloon",
      "maps": "mm_dev"
    },
    {
      "id": "fig21.7",
      "x": 0.488,
      "y": 0.468,
      "w": 0.055,
      "h": 0.065,
      "en": "7 · Leakage Monitor function (LM)",
      "es": "Función de monitor de fugas (LM)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.4.1, p. 360 (2-2)",
      "kind": "balloon",
      "maps": "lm"
    },
    {
      "id": "fig21.8",
      "x": 0.498,
      "y": 0.59,
      "w": 0.055,
      "h": 0.065,
      "en": "8 · Discharge detector function (DD)",
      "es": "Función detector de descarga (DD)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.4.2, p. 360 (2-2)",
      "kind": "balloon",
      "maps": "dd",
      "variant": "lo-optional",
      "note": ""
    },
    {
      "id": "fig21.9",
      "x": 0.555,
      "y": 0.368,
      "w": 0.055,
      "h": 0.065,
      "en": "9 · Water detector function (WD)",
      "es": "Función detector de agua (WD)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.4.3, p. 361 (2-3)",
      "kind": "balloon",
      "maps": "wd",
      "variant": "hfo",
      "note": ""
    },
    {
      "id": "fig21.10",
      "x": 0.8,
      "y": 0.422,
      "w": 0.06,
      "h": 0.08,
      "en": "10 · Oil heater",
      "es": "Calentador de aceite",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.2, p. 360 (2-2)",
      "kind": "balloon",
      "maps": "heater"
    },
    {
      "id": "fig21.11",
      "x": 0.268,
      "y": 0.622,
      "w": 0.055,
      "h": 0.07,
      "en": "11 · Oil strainer",
      "es": "Filtro de aceite",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "balloon",
      "maps": "strainer"
    },
    {
      "id": "fig21.12",
      "x": 0.655,
      "y": 0.5,
      "w": 0.055,
      "h": 0.065,
      "en": "12 · Flow control valve",
      "es": "Válvula de control de caudal",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "balloon"
    },
    {
      "id": "fig21.13",
      "x": 0.288,
      "y": 0.526,
      "w": 0.055,
      "h": 0.065,
      "en": "13 · Pressure control valve",
      "es": "Válvula de control de presión",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "balloon"
    },
    {
      "id": "fig21.A",
      "x": 0.125,
      "y": 0.598,
      "w": 0.05,
      "h": 0.06,
      "en": "A · Dirty oil inlet",
      "es": "Entrada de aceite sucio",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line",
      "maps": "n1"
    },
    {
      "id": "fig21.B",
      "x": 0.125,
      "y": 0.528,
      "w": 0.05,
      "h": 0.06,
      "en": "B · Purified oil outlet",
      "es": "Salida de aceite purificado",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line",
      "maps": "n2"
    },
    {
      "id": "fig21.C",
      "x": 0.912,
      "y": 0.382,
      "w": 0.05,
      "h": 0.06,
      "en": "C · Compressed air inlet",
      "es": "Entrada de aire comprimido",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line",
      "maps": "n7"
    },
    {
      "id": "fig21.D",
      "x": 0.576,
      "y": 0.868,
      "w": 0.05,
      "h": 0.06,
      "en": "D · Sludge & Water outlet",
      "es": "Salida de lodos y agua",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line",
      "maps": "n8"
    },
    {
      "id": "fig21.E",
      "x": 0.125,
      "y": 0.448,
      "w": 0.05,
      "h": 0.06,
      "en": "E · Water inlet",
      "es": "Entrada de agua",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line",
      "maps": "n6"
    },
    {
      "id": "fig21.F",
      "x": 0.45,
      "y": 0.868,
      "w": 0.05,
      "h": 0.06,
      "en": "F · Drain",
      "es": "Drenaje",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line"
    },
    {
      "id": "fig21.G",
      "x": 0.125,
      "y": 0.71,
      "w": 0.05,
      "h": 0.06,
      "en": "G · Circulation",
      "es": "Circulación",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "line",
      "maps": "n3"
    },
    {
      "id": "fig21.P1",
      "x": 0.248,
      "y": 0.322,
      "w": 0.045,
      "h": 0.055,
      "en": "P · Pressure gauge",
      "es": "Manómetro (unidad de agua de operación)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "gauge",
      "maps": "pg_wat"
    },
    {
      "id": "fig21.P2",
      "x": 0.746,
      "y": 0.648,
      "w": 0.045,
      "h": 0.055,
      "en": "P · Pressure gauge",
      "es": "Manómetro (salida del calentador / línea de aceite)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "gauge"
    },
    {
      "id": "fig21.Cg",
      "x": 0.338,
      "y": 0.668,
      "w": 0.045,
      "h": 0.055,
      "en": "C · Compound gauge",
      "es": "Manómetro compuesto",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "gauge",
      "maps": "pg_suc_in"
    },
    {
      "id": "fig21.M",
      "x": 0.548,
      "y": 0.59,
      "w": 0.045,
      "h": 0.055,
      "en": "M · Motor",
      "es": "Motor",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "balloon",
      "maps": "motor"
    },
    {
      "id": "fig21.R4",
      "x": 0.21,
      "y": 0.348,
      "w": 0.045,
      "h": 0.055,
      "en": "R4",
      "es": "",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) (el símbolo R4 está en Fig. 2-1; la lista de “REDUCING VALVE” está en Vol. VI p. 31, SG701113, sin ligar el código R4)",
      "kind": "balloon"
    },
    {
      "id": "fig21.SV3",
      "x": 0.314,
      "y": 0.35,
      "w": 0.04,
      "h": 0.05,
      "en": "SV3",
      "es": "SV3 — Forma parte de la unidad de válvulas solenoides de agua de operación (ítem 3).",
      "cite": "Vol. VI p. 9, HDZZB01, lista de equipos WV (SV1, SV2, SV3, SV9); Fig. 2-1 p. 359",
      "kind": "balloon",
      "maps": "d.{unit}.SV3"
    },
    {
      "id": "fig21.SV2",
      "x": 0.342,
      "y": 0.35,
      "w": 0.04,
      "h": 0.05,
      "en": "SV2",
      "es": "SV2 — Forma parte de la unidad de válvulas solenoides de agua de operación (ítem 3).",
      "cite": "Vol. VI p. 9, HDZZB01, lista de equipos WV; Fig. 2-1 p. 359",
      "kind": "balloon",
      "maps": "d.{unit}.SV2"
    },
    {
      "id": "fig21.SV1",
      "x": 0.37,
      "y": 0.35,
      "w": 0.04,
      "h": 0.05,
      "en": "SV1",
      "es": "SV1 — Forma parte de la unidad de válvulas solenoides de agua de operación (ítem 3).",
      "cite": "Vol. VI p. 9, HDZZB01, lista de equipos WV; Fig. 2-1 p. 359",
      "kind": "balloon",
      "maps": "d.{unit}.SV1"
    },
    {
      "id": "fig21.SV9",
      "x": 0.4,
      "y": 0.35,
      "w": 0.04,
      "h": 0.05,
      "en": "SV9",
      "es": "SV9 — Forma parte de la unidad de válvulas solenoides de agua de operación (ítem 3).",
      "cite": "Vol. VI p. 9, HDZZB01; Fig. 2-1 p. 359 (nota GBC-1)",
      "kind": "balloon",
      "maps": "d.hfo.SV9",
      "variant": "hfo"
    },
    {
      "id": "fig21.CV1",
      "x": 0.678,
      "y": 0.338,
      "w": 0.05,
      "h": 0.06,
      "en": "CV1 · 3-way cylinder valve (Feed valve)",
      "es": "Válvula cilíndrica de 3 vías (alimentación)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.3, p. 360; Vol. VI p. 32, SCVAFSV",
      "kind": "balloon",
      "maps": "cv"
    },
    {
      "id": "fig21.SV4",
      "x": 0.878,
      "y": 0.308,
      "w": 0.05,
      "h": 0.06,
      "en": "SV4 · 3-way solenoid valve",
      "es": "Válvula solenoide de 3 vías (unidad de aire, con AF1)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / Vol. VI p. 32, SCVAFSV",
      "kind": "balloon",
      "maps": "av"
    },
    {
      "id": "fig21.panel",
      "x": 0.53,
      "y": 0.228,
      "w": 0.1,
      "h": 0.07,
      "en": "Automatic Control panel",
      "es": "Tablero de control automático",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.6, p. 361 (2-3)",
      "kind": "rect",
      "maps": "panel"
    },
    {
      "id": "fig21.starter",
      "x": 0.655,
      "y": 0.218,
      "w": 0.08,
      "h": 0.06,
      "en": "Starter",
      "es": "Arrancador",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1) / OM1 §2.5, p. 361 (2-3)",
      "kind": "rect"
    },
    {
      "id": "fig21.pwr",
      "x": 0.82,
      "y": 0.218,
      "w": 0.08,
      "h": 0.06,
      "en": "Electric Power source",
      "es": "Fuente de alimentación eléctrica",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "rect",
      "maps": "pwr_cable"
    },
    {
      "id": "fig21.supply",
      "x": 0.28,
      "y": 0.775,
      "w": 0.1,
      "h": 0.06,
      "en": "SAMGONG SUPPLY",
      "es": "Límite de suministro Samgong (línea mixto-punto)",
      "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
      "kind": "rect"
    }
  ],
  "legend": [
    {
      "tag": "1",
      "en": "SELFJECTOR",
      "es": "Autopurificadora",
      "id": "fig21.1"
    },
    {
      "tag": "2",
      "en": "Gear pump",
      "es": "Bomba de engranajes",
      "id": "fig21.2"
    },
    {
      "tag": "3",
      "en": "Solenoid valves unit for operating water",
      "es": "Unidad de válvulas solenoides de agua de operación",
      "id": "fig21.3"
    },
    {
      "tag": "4",
      "en": "3-way cylinder valve (Feed valve)",
      "es": "Válvula cilíndrica de 3 vías (alimentación)",
      "id": "fig21.4"
    },
    {
      "tag": "5",
      "en": "3-way solenoid valve",
      "es": "Válvula solenoide de 3 vías",
      "id": "fig21.5"
    },
    {
      "tag": "6",
      "en": "Multi-Monitor",
      "es": "Multi-Monitor",
      "id": "fig21.6"
    },
    {
      "tag": "7",
      "en": "Leakage Monitor function (LM)",
      "es": "Función de monitor de fugas (LM)",
      "id": "fig21.7"
    },
    {
      "tag": "8",
      "en": "Discharge detector function (DD)",
      "es": "Función detector de descarga (DD)",
      "id": "fig21.8"
    },
    {
      "tag": "9",
      "en": "Water detector function (WD)",
      "es": "Función detector de agua (WD)",
      "id": "fig21.9"
    },
    {
      "tag": "10",
      "en": "Oil heater",
      "es": "Calentador de aceite",
      "id": "fig21.10"
    },
    {
      "tag": "11",
      "en": "Oil strainer",
      "es": "Filtro de aceite",
      "id": "fig21.11"
    },
    {
      "tag": "12",
      "en": "Flow control valve",
      "es": "Válvula de control de caudal",
      "id": "fig21.12"
    },
    {
      "tag": "13",
      "en": "Pressure control valve",
      "es": "Válvula de control de presión",
      "id": "fig21.13"
    },
    {
      "tag": "A",
      "en": "Dirty oil inlet",
      "es": "Entrada de aceite sucio",
      "id": "fig21.A"
    },
    {
      "tag": "B",
      "en": "Purified oil outlet",
      "es": "Salida de aceite purificado",
      "id": "fig21.B"
    },
    {
      "tag": "C",
      "en": "Compressed air inlet",
      "es": "Entrada de aire comprimido",
      "id": "fig21.C"
    },
    {
      "tag": "D",
      "en": "Sludge & Water outlet",
      "es": "Salida de lodos y agua",
      "id": "fig21.D"
    },
    {
      "tag": "E",
      "en": "Water inlet",
      "es": "Entrada de agua",
      "id": "fig21.E"
    },
    {
      "tag": "F",
      "en": "Drain",
      "es": "Drenaje",
      "id": "fig21.F"
    },
    {
      "tag": "G",
      "en": "Circulation",
      "es": "Circulación",
      "id": "fig21.G"
    },
    {
      "tag": "P",
      "en": "Pressure gauge",
      "es": "Manómetro",
      "id": "fig21.P1"
    },
    {
      "tag": "C⃝",
      "en": "Compound gauge",
      "es": "Manómetro compuesto",
      "id": "fig21.Cg"
    },
    {
      "tag": "M",
      "en": "Motor",
      "es": "Motor",
      "id": "fig21.M"
    }
  ]
};

  const CATALOG = {
  "fig21": {
    "id": "fig21",
    "section": "s11",
    "title": "Fig. 2-1 Sistema (OM 1)",
    "cite": "Vol. VI p. 359, Operation Manual 1, Fig. 2-1 (página impresa 2-1)",
    "image": "assets/diagrams/fig21.png",
    "primary": true
  },
  "hdzzb01": {
    "id": "hdzzb01",
    "section": "s11",
    "unit": "hfo",
    "title": "Flujo HFO (HDZZB01)",
    "cite": "Vol. VI p. 9, HDZZB01, HD0071P-DW-6/92",
    "image": "assets/diagrams/hdzzb01.png",
    "pages": null
  },
  "hdzzb03": {
    "id": "hdzzb03",
    "section": "s11",
    "unit": "lo",
    "title": "Flujo LO (HDZZB03)",
    "cite": "Vol. VI p. 56, HDZZB03, HD0071P-DW-52/92",
    "image": "assets/diagrams/hdzzb03.png"
  },
  "booster": {
    "id": "booster",
    "section": "s11",
    "unit": "plant",
    "title": "P&ID booster HFO",
    "cite": "Vol. V p. 15, H.F.O. Booster Unit, Final dwg",
    "image": "assets/diagrams/booster.png"
  },
  "bowl": {
    "id": "bowl",
    "section": "s12",
    "title": "Bowl (conjunto)",
    "cite": "Vol. VI p. 18–19, S206346 / SG100301",
    "pages": [
      {
        "id": "bowl_asm",
        "title": "Conjunto S206346",
        "cite": "Vol. VI p. 18, S206346",
        "image": "assets/diagrams/bowl_asm.png"
      },
      {
        "id": "bowl_list",
        "title": "Lista SG100301",
        "cite": "Vol. VI p. 19, SG100301",
        "image": "assets/diagrams/bowl_list.png"
      }
    ]
  },
  "water": {
    "id": "water",
    "section": "s12",
    "title": "Distribuidor de agua 701–711",
    "cite": "Vol. VI p. 20–21, S206348 / SG400301 (ítems 701–711)",
    "pages": [
      {
        "id": "vshaft_asm",
        "title": "Eje vertical S206348 (701–711 arriba)",
        "cite": "Vol. VI p. 20, S206348",
        "image": "assets/diagrams/vshaft_asm.png"
      },
      {
        "id": "water_list",
        "title": "Lista SG400301",
        "cite": "Vol. VI p. 21, SG400301",
        "image": "assets/diagrams/water_list.png"
      }
    ]
  },
  "hshaft": {
    "id": "hshaft",
    "section": "s12",
    "title": "Eje horizontal y freno",
    "cite": "Vol. VI p. 22–23, S206349 / SG300301",
    "pages": [
      {
        "id": "hshaft_asm",
        "title": "Conjunto S206349",
        "cite": "Vol. VI p. 22, S206349",
        "image": "assets/diagrams/hshaft_asm.png"
      },
      {
        "id": "hshaft_list",
        "title": "Lista SG300301",
        "cite": "Vol. VI p. 23, SG300301",
        "image": "assets/diagrams/hshaft_list.png"
      }
    ]
  },
  "pump": {
    "id": "pump",
    "section": "s12",
    "title": "Bomba de engranajes",
    "cite": "Vol. VI p. 24–25, S206898 / SGGP0201",
    "pages": [
      {
        "id": "pump_asm",
        "title": "Conjunto S206898",
        "cite": "Vol. VI p. 24, S206898",
        "image": "assets/diagrams/pump_asm.png"
      },
      {
        "id": "pump_list",
        "title": "Lista SGGP0201",
        "cite": "Vol. VI p. 25, SGGP0201",
        "image": "assets/diagrams/pump_list.png"
      }
    ]
  },
  "frame": {
    "id": "frame",
    "section": "s12",
    "title": "Bastidor y tapa",
    "cite": "Vol. VI p. 14–16, S206353 / SG220301",
    "pages": [
      {
        "id": "frame_asm",
        "title": "Conjunto S206353",
        "cite": "Vol. VI p. 14, S206353",
        "image": "assets/diagrams/frame_asm.png"
      },
      {
        "id": "frame_list1",
        "title": "Lista SG220301",
        "cite": "Vol. VI p. 15, SG220301",
        "image": "assets/diagrams/frame_list1.png"
      },
      {
        "id": "frame_list2",
        "title": "Lista SG220302",
        "cite": "Vol. VI p. 16, SG220302",
        "image": "assets/diagrams/frame_list2.png"
      }
    ]
  },
  "tools_hfo": {
    "id": "tools_hfo",
    "section": "s3",
    "unit": "hfo",
    "title": "Lista de herramientas SJ30GH",
    "cite": "Vol. VI p. 262–264, SGTL0301A / SGTL0302 / SGTL0303",
    "pages": [
      {
        "id": "tools_hfo_1",
        "title": "Lista (1/3) 801–808",
        "cite": "Vol. VI p. 262, SGTL0301A",
        "image": "assets/diagrams/tools_hfo_1.png"
      },
      {
        "id": "tools_hfo_2",
        "title": "Lista (2/3) 809–815",
        "cite": "Vol. VI p. 263, SGTL0302",
        "image": "assets/diagrams/tools_hfo_2.png"
      },
      {
        "id": "tools_hfo_3",
        "title": "Lista (3/3) 816–823",
        "cite": "Vol. VI p. 264, SGTL0303",
        "image": "assets/diagrams/tools_hfo_3.png"
      }
    ]
  },
  "tools_lo": {
    "id": "tools_lo",
    "section": "s3",
    "unit": "lo",
    "title": "Lista de herramientas SJ20G",
    "cite": "Vol. VI p. 266–268, SGTL0201A / SGTL0203",
    "pages": [
      {
        "id": "tools_lo_1",
        "title": "Lista (1/3) 801–808",
        "cite": "Vol. VI p. 266, SGTL0201A",
        "image": "assets/diagrams/tools_lo_1.png"
      },
      {
        "id": "tools_lo_2",
        "title": "Lista (2/3) 809–815",
        "cite": "Vol. VI p. 267",
        "image": "assets/diagrams/tools_lo_2.png"
      },
      {
        "id": "tools_lo_3",
        "title": "Lista (3/3) 816–823",
        "cite": "Vol. VI p. 268, SGTL0203",
        "image": "assets/diagrams/tools_lo_3.png"
      }
    ]
  }
};
  /* attach fig21 runtime fields */
  CATALOG.fig21.hots = FIG21.hots;
  CATALOG.fig21.legend = FIG21.legend;
  CATALOG.fig21.intro_en = FIG21.intro_en;
  CATALOG.fig21.intro_es = FIG21.intro_es;
  CATALOG.fig21.note_en = FIG21.note_en;
  CATALOG.fig21.note_es = FIG21.note_es;
  CATALOG.fig21.image = FIG21.image;
  CATALOG.fig21.legHead = "Leyenda (Fig. 2-1) · English / español";

  const TAGS = {};
  function indexHots(list){
    (list||[]).forEach(h=>{ TAGS[h.id]=h; if(h.maps) TAGS[h.maps]=TAGS[h.maps]||h; });
  }
  function indexAll(){
    indexHots(FIG21.hots);
    Object.keys(CATALOG).forEach(k=>{
      const d=CATALOG[k];
      indexHots(d.hots);
      (d.legend||[]).forEach(r=>{ if(r.id && !TAGS[r.id]) TAGS[r.id]=r; if(r.maps && !TAGS[r.maps]) TAGS[r.maps]=r; });
      (d.pages||[]).forEach(p=>{
        indexHots(p.hots);
        (p.legend||[]).forEach(r=>{ if(r.id && !TAGS[r.id]) TAGS[r.id]=r; if(r.maps && !TAGS[r.maps]) TAGS[r.maps]=r; });
      });
    });
  }
  indexAll();

  function tagOf(id){
    return TAGS[id] || null;
  }

  function resolveHot(h, unit){
    const u = unit || "hfo";
    let id = h.maps || h.id;
    id = String(id).replace("{unit}", u==="lo"?"lo":"hfo");
    return id;
  }

  function hiddenFor(h, unit){
    if(h.variant==="hfo" && unit==="lo") return true;
    return false;
  }

  function cleanDesc(s, tag){
    if(!s) return "";
    let x=String(s);
    const hadMissing=/sin descripci[oó]n/i.test(x) || /no hay descripci[oó]n/i.test(x);
    x=x.replace(/\s*sin descripci[oó]n en el manual\.?/gi, "");
    x=x.replace(/\s*sin descripci[oó]n individual en el manual\.?/gi, "");
    x=x.replace(/\s*Etiqueta del plano\.?/gi, "");
    x=x.replace(/\s*No hay descripci[oó]n individual[^.]*\./gi, "");
    x=x.replace(/\s*No se suministra en (la )?especificación automática GBC-1[^.]*\./gi, "");
    x=x.replace(/\s*No se suministra en (especificación )?GBC-1[^.]*\./gi, "");
    x=x.replace(/\s*En la especificación automática GBC-1[^.]*\./gi, "");
    x=x.replace(/\s*En GBC-1 \(LO\)[^.]*\./gi, "");
    x=x.replace(/\s*\(nota de Fig\.?\s*2-1[^)]*\)/gi, "");
    x=x.replace(/\s*·\s*no aplica a GBC-1[^·]*/gi, "");
    x=x.replace(/\s{2,}/g," ").replace(/\s*·\s*$/,"").replace(/^\s*·\s*/,"").trim();
    if(hadMissing && (!x || (tag && x.replace(/[·\s—–-]/g,"")===String(tag).replace(/[·\s—–-]/g,"")))) return "";
    return x;
  }
  function hotBtn(h, unit){
    if(hiddenFor(h, unit)) return "";
    const id=resolveHot(h, unit);
    const x=(h.x*100).toFixed(2), y=(h.y*100).toFixed(2);
    const isRect = h.kind==="rect";
    const cls = "hot-btn"+(isRect?" rect":"")+(h.variant==="lo-optional"?" opt":"");
    const esClean=cleanDesc(h.es||"", h.id||"");
    const title = (h.en||h.id)+(esClean?" — "+esClean:"");
    const style = isRect
      ? `left:${x}%;top:${y}%;width:${((h.w||0.08)*100).toFixed(2)}%;height:${((h.h||0.05)*100).toFixed(2)}%`
      : `left:${x}%;top:${y}%;width:48px;height:48px`;
    return `<button type="button" class="${cls}" style="${style}" data-id="${esc(id)}" data-hot="${esc(h.id)}" title="${esc(title)}"><span class="dot" aria-hidden="true"></span><span class="visually-hidden">${esc(title)}</span></button>`;
  }

  function legendHTML(d, unit, page){
    const legend = (page && page.legend && page.legend.length) ? page.legend : (d.legend||[]);
    if(!legend.length) return "";
    const head = "Leyenda";
    const rows=legend.map(r=>{
      const h=TAGS[r.id]||r;
      const hid=hiddenFor(h, unit);
      const rid = r.maps || h.maps || r.id;
      const resolved = rid ? resolveHot({maps:rid,id:r.id}, unit) : "";
      const es = cleanDesc(r.es||"", r.tag||"");
      const attrs = resolved ? `data-id="${esc(resolved)}" data-hot="${esc(r.id||"")}"` : "";
      const cls = hid ? "off" : "";
      const esH = es ? `<span class="es">${esc(es)}</span>` : "";
      return `<tr class="${cls}" ${attrs}><td class="tag">${esc(r.tag)}</td><td><span class="en">${esc(r.en)}</span>${esH}</td></tr>`;
    }).join("");
    return `<table class="leg-table"><thead><tr><th>N.º</th><th>${esc(head)}</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  function pagesOf(d){ return d.pages && d.pages.length ? d.pages : null; }

  function render(id, unit, pageIdx){
    const d=CATALOG[id]; if(!d) return "";
    const pages=pagesOf(d);
    let img, hots, cite, title, idx=pageIdx||0;
    if(pages){
      if(idx<0||idx>=pages.length) idx=0;
      img=pages[idx].image; cite=pages[idx].cite; title=pages[idx].title;
      hots=pages[idx].hots||[];
    } else {
      img=d.image; cite=d.cite; title=d.title; hots=d.hots||[];
    }
    const pager = pages && pages.length>1 ? `<div class="chip-row" data-pager="${esc(id)}">
      ${pages.map((p,i)=>`<button type="button" class="chip ${i===idx?"on":""}" data-page="${i}">${esc(p.title)}</button>`).join("")}
    </div>` : "";
    const btns=hots.map(h=>hotBtn(h, unit)).join("");
    const stage=`<div class="draw-wrap" data-dwg="${esc(id)}" data-page="${idx}">
        <img class="dwg" src="${esc(asset(img))}" alt="${esc(title||d.title)}">
        ${btns}
      </div>`;
    return { chrome: pager, stage, below: legendHTML(d, unit, pages?pages[idx]:null) };
  }

  function collectMarks(list, unit, out){
    (list||[]).forEach(h=>{
      if(!h) return;
      const full=Object.assign({}, TAGS[h.id]||{}, h);
      if(hiddenFor(full, unit)) return;
      const i=resolveHot({id:full.id,maps:full.maps}, unit);
      if(i && out.indexOf(i)<0) out.push(i);
    });
  }
  function idsIn(id, unit){
    const d=CATALOG[id]; if(!d) return [];
    const pages=pagesOf(d);
    const out=[];
    if(pages){
      pages.forEach(p=>{ collectMarks(p.hots, unit, out); collectMarks(p.legend, unit, out); });
    } else {
      collectMarks(d.hots, unit, out);
      collectMarks(d.legend, unit, out);
    }
    return out;
  }

  return { CATALOG, FIG21, TAGS, tagOf, render, idsIn, resolveHot, hiddenFor, legendHTML, pagesOf, asset, indexHots, indexAll };
})();
