<script>

 // lhs is the full enumeration of the scales I need to memorize
 // rhs is its half-step "pair"
 // I have found it helpful to study them as pairs
 var scales = [];
 scales["G Major"]      = "A-flat Major";
 scales["A-flat Major"] = "G Major";
 scales["D Major"]      = "D-flat Major";
 scales["D-flat Major"] = "D Major";
 scales["E Minor"]      = "F Minor";
 scales["F Minor"]      = "E Minor";
 scales["B Minor"]      = "B-flat Minor";
 scales["B-flat Minor"] = "B Minor";

normal_note_values    = ["triplet @ 69", "16th note @ 69"]
tremolando_note_value = "triplet @ 88";
tremolando_percent    = 2/3; // an even liklihood of doing each note value

strokes    = ["Rest Stroke", "Free Stroke"];
fingerings = ["im", "ma", "ia"];

 // lhs is the full enumeration of the arpeggios I need to memorize
 // rhs is its complement or "pair"
 // I have found it helpful to study them as pairs  
 var arpeggios = [];
 arpeggios["p-i-m-a ascending"]                  = "p-a-m-i descending";
 arpeggios["p-a-m-i descending"]                 = "p-i-m-a ascending";
 arpeggios["p-i-m-i pattern"]                    = "p-m-i-m pattern ";
 arpeggios["p-m-i-m pattern"]                    = "p-i-m-i pattern";
 arpeggios["ascending and descending sextuplet"] = "descending and ascending sextuplet";
 arpeggios["descending and ascending sextuplet"] = "ascending and descending sextuplet";
 arpeggios["p-a dyad-m-i triplet pattern"]       = "p-i dyad-m-a triplet pattern";
 arpeggios["p-i dyad-m-a triplet pattern"]       = "p-a dyad-m-i triplet pattern";
 arpeggios["p-m dyad-i-a triplet pattern"]       = "p-i dyad-a-m triplet pattern";
 arpeggios["p-i dyad-a-m triplet pattern"]       = "p-m dyad-i-a triplet pattern ";

arpeggio_speed_normal    = 76;
arpeggio_speed_sextuplet = 52;

pieces = ["Bach Minuet", "Paganini Minuet", "Spanish Romance"]);

studies = ["Carcassi Tremolo Study", "Bosch Lamento"]);

</script>
