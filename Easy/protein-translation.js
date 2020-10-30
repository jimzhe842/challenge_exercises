const CODON_TO_AA = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",

}


function translate(RNASequence) {
  if (RNASequence === undefined) {
    return [];
  }
  if (!(RNASequence.length % 3 === 0)) {
    throw "Invalid length";
  }
  
  let aminoAcids = [];
  for (let idx = 0; idx < RNASequence.length; idx += 3) {
    let codon = RNASequence.slice(idx, idx + 3);
    let aminoAcid = CODON_TO_AA[codon];
    if (!aminoAcid) {
      throw "Invalid codon";
    } else if (aminoAcid === "STOP") {
      break
    }  else {
      aminoAcids.push(aminoAcid);
    }
  }

  return aminoAcids;
}

module.exports = translate;