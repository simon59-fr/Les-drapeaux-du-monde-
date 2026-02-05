const flags = [
  { image: "https://flagcdn.com/w320/af.png", answer: "afghanistan" },
  { image: "https://flagcdn.com/w320/al.png", answer: "albanie" },
  { image: "https://flagcdn.com/w320/dz.png", answer: "algerie" },
  { image: "https://flagcdn.com/w320/ad.png", answer: "andorre" },
  { image: "https://flagcdn.com/w320/ao.png", answer: "angola" },
  { image: "https://flagcdn.com/w320/ar.png", answer: "argentine" },
  { image: "https://flagcdn.com/w320/am.png", answer: "armenie" },
  { image: "https://flagcdn.com/w320/au.png", answer: "australie" },
  { image: "https://flagcdn.com/w320/at.png", answer: "autriche" },
  { image: "https://flagcdn.com/w320/az.png", answer: "azerbaidjan" },

  { image: "https://flagcdn.com/w320/bs.png", answer: "bahamas" },
  { image: "https://flagcdn.com/w320/bh.png", answer: "bahrein" },
  { image: "https://flagcdn.com/w320/bd.png", answer: "bangladesh" },
  { image: "https://flagcdn.com/w320/bb.png", answer: "barbade" },
  { image: "https://flagcdn.com/w320/by.png", answer: "belarus" },
  { image: "https://flagcdn.com/w320/be.png", answer: "belgique" },
  { image: "https://flagcdn.com/w320/bz.png", answer: "belize" },
  { image: "https://flagcdn.com/w320/bj.png", answer: "benin" },
  { image: "https://flagcdn.com/w320/bo.png", answer: "bolivie" },
  { image: "https://flagcdn.com/w320/ba.png", answer: "bosnie-herzegovine" },
  { image: "https://flagcdn.com/w320/bw.png", answer: "botswana" },
  { image: "https://flagcdn.com/w320/br.png", answer: "bresil" },
  { image: "https://flagcdn.com/w320/bn.png", answer: "brunei" },
  { image: "https://flagcdn.com/w320/bg.png", answer: "bulgarie" },
  { image: "https://flagcdn.com/w320/bf.png", answer: "burkina faso" },
  { image: "https://flagcdn.com/w320/bi.png", answer: "burundi" },

  { image: "https://flagcdn.com/w320/kh.png", answer: "cambodge" },
  { image: "https://flagcdn.com/w320/cm.png", answer: "cameroun" },
  { image: "https://flagcdn.com/w320/ca.png", answer: "canada" },
  { image: "https://flagcdn.com/w320/cv.png", answer: "cap-vert" },
  { image: "https://flagcdn.com/w320/cl.png", answer: "chili" },
  { image: "https://flagcdn.com/w320/cn.png", answer: "chine" },
  { image: "https://flagcdn.com/w320/co.png", answer: "colombie" },
  { image: "https://flagcdn.com/w320/km.png", answer: "comores" },
  { image: "https://flagcdn.com/w320/cg.png", answer: "congo" },
  { image: "https://flagcdn.com/w320/cr.png", answer: "costa rica" },
  { image: "https://flagcdn.com/w320/hr.png", answer: "croatie" },
  { image: "https://flagcdn.com/w320/cu.png", answer: "cuba" },
  { image: "https://flagcdn.com/w320/cy.png", answer: "chypre" },
  { image: "https://flagcdn.com/w320/cz.png", answer: "republique tcheque" },

  { image: "https://flagcdn.com/w320/dk.png", answer: "danemark" },
  { image: "https://flagcdn.com/w320/dj.png", answer: "djibouti" },
  { image: "https://flagcdn.com/w320/do.png", answer: "republique dominicaine" },

  { image: "https://flagcdn.com/w320/ec.png", answer: "equateur" },
  { image: "https://flagcdn.com/w320/eg.png", answer: "egypte" },
  { image: "https://flagcdn.com/w320/sv.png", answer: "salvador" },
  { image: "https://flagcdn.com/w320/ee.png", answer: "estonie" },
  { image: "https://flagcdn.com/w320/et.png", answer: "ethiopie" },

  { image: "https://flagcdn.com/w320/fi.png", answer: "finlande" },
  { image: "https://flagcdn.com/w320/fr.png", answer: "france" },

  { image: "https://flagcdn.com/w320/ge.png", answer: "georgie" },
  { image: "https://flagcdn.com/w320/de.png", answer: "allemagne" },
  { image: "https://flagcdn.com/w320/gh.png", answer: "ghana" },
  { image: "https://flagcdn.com/w320/gr.png", answer: "grece" },

  { image: "https://flagcdn.com/w320/ht.png", answer: "haiti" },
  { image: "https://flagcdn.com/w320/hn.png", answer: "honduras" },
  { image: "https://flagcdn.com/w320/hu.png", answer: "hongrie" },

  { image: "https://flagcdn.com/w320/is.png", answer: "islande" },
  { image: "https://flagcdn.com/w320/in.png", answer: "inde" },
  { image: "https://flagcdn.com/w320/id.png", answer: "indonesie" },
  { image: "https://flagcdn.com/w320/ir.png", answer: "iran" },
  { image: "https://flagcdn.com/w320/iq.png", answer: "irak" },
  { image: "https://flagcdn.com/w320/ie.png", answer: "irlande" },
  { image: "https://flagcdn.com/w320/il.png", answer: "israel" },
  { image: "https://flagcdn.com/w320/it.png", answer: "italie" },

  { image: "https://flagcdn.com/w320/jp.png", answer: "japon" },
  { image: "https://flagcdn.com/w320/jo.png", answer: "jordanie" },

  { image: "https://flagcdn.com/w320/ke.png", answer: "kenya" },
  { image: "https://flagcdn.com/w320/kr.png", answer: "coree du sud" },
  { image: "https://flagcdn.com/w320/kp.png", answer: "coree du nord" },

  { image: "https://flagcdn.com/w320/lb.png", answer: "liban" },
  { image: "https://flagcdn.com/w320/ly.png", answer: "libye" },

  { image: "https://flagcdn.com/w320/ma.png", answer: "maroc" },
  { image: "https://flagcdn.com/w320/mx.png", answer: "mexique" },

  { image: "https://flagcdn.com/w320/nl.png", answer: "pays-bas" },
  { image: "https://flagcdn.com/w320/no.png", answer: "norvege" },

  { image: "https://flagcdn.com/w320/pk.png", answer: "pakistan" },
  { image: "https://flagcdn.com/w320/pe.png", answer: "perou" },
  { image: "https://flagcdn.com/w320/ph.png", answer: "philippines" },
  { image: "https://flagcdn.com/w320/pl.png", answer: "pologne" },
  { image: "https://flagcdn.com/w320/pt.png", answer: "portugal" },

  { image: "https://flagcdn.com/w320/qa.png", answer: "qatar" },

  { image: "https://flagcdn.com/w320/ro.png", answer: "roumanie" },
  { image: "https://flagcdn.com/w320/ru.png", answer: "russie" },

  { image: "https://flagcdn.com/w320/sa.png", answer: "arabie saoudite" },
  { image: "https://flagcdn.com/w320/sn.png", answer: "senegal" },
  { image: "https://flagcdn.com/w320/rs.png", answer: "serbie" },
  { image: "https://flagcdn.com/w320/sk.png", answer: "slovaquie" },
  { image: "https://flagcdn.com/w320/si.png", answer: "slovenie" },
  { image: "https://flagcdn.com/w320/za.png", answer: "afrique du sud" },
  { image: "https://flagcdn.com/w320/es.png", answer: "espagne" },
  { image: "https://flagcdn.com/w320/se.png", answer: "suede" },
  { image: "https://flagcdn.com/w320/ch.png", answer: "suisse" },

  { image: "https://flagcdn.com/w320/tn.png", answer: "tunisie" },
  { image: "https://flagcdn.com/w320/tr.png", answer: "turquie" },

  { image: "https://flagcdn.com/w320/ua.png", answer: "ukraine" },
  { image: "https://flagcdn.com/w320/ae.png", answer: "emirats arabes unis" },
  { image: "https://flagcdn.com/w320/gb.png", answer: "royaume-uni" },
  { image: "https://flagcdn.com/w320/us.png", answer: "etats-unis" },

  { image: "https://flagcdn.com/w320/ve.png", answer: "venezuela" },
  { image: "https://flagcdn.com/w320/vn.png", answer: "vietnam" },

  { image: "https://flagcdn.com/w320/ye.png", answer: "yemen" },

  { image: "https://flagcdn.com/w320/zm.png", answer: "zambie" },
  { image: "https://flagcdn.com/w320/zw.png", answer: "zimbabwe" }
];
