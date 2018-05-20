<script src="data.js"></script>
<script>

// this program does a lot of random selection of array elements.
// I'm surprised that js doesn't seem to have a built-in random array selection function
function get_random_element(x)
{
  return x[Math.floor(Math.random() * x.length)];
}

// scale selection is comlicated. In addition to the large number of scales, there are pairings of
// common scales (e.g. G) and half-step variations that are rarely present in the repertoire 
// (e.g. A-flat major). 
// I like to practice the rare keys with their common counterparts to reinforce the relationship.
// additionally, RCM has multiple variations on fingerings and rhythms for each scale
function generate_new_scale()
{
  var scale1 = get_random_element(Object.keys(scales));
  var scale2 = scales[scale1];

  // equal practice for triplets, sixteenth notes and tremolando  
  tremolando = Math.random() > tremolando_percent); 
  if (tremolando)
  {
	var note_value = tremolando_note_value;
  }
  else
  {
	var note_value = get_random_element(normal_note_values);
  }
  var stroke     = get_random_element(strokes);
  var fingering  = get_random_element(fingerings);
	
  ret = "<b>Scales: </b>" + scale1 + " and " + scale2 + ". " + note_value + ", " + stroke + ", " + fingering;
  if (tremolando)
  {
	ret = ret + ". Tremolando";	
  }

  return ret;
}

// there are 10 arpeggios, but they have natural pairings
// e.g. p-i-m-a ascending and p-a-m-i descending.
// I like to practice the pairings the same day, to reinforce the relationship
// also, the sextuplet pair has a different speed than the other arpeggios
function generate_new_arpeggio()
{
  var arpeggio1 = get_random_element(Object.keys(arpeggios));
  var arpeggio2 = arpeggios[arpeggio1];

  if (arpeggio1.indexOf("sextuplet") !== -1)
  {
	var arpeggio_speed = arpeggio_speed_sextuplet;
  }
  else
  {
	var arpeggio_speed = normal;
  }

  return "<b>Arpeggio: </b>" + arpeggio1 + " and " + arpeggio2 + " at " + arpeggio_speed;	
}

function generate_new_practice()
{
  // scale and arpeggio selection in complex
  scale_output    = generate_new_scale();
  arpeggio_output = generate_new_arpeggio(); 

  // piece and study selection is easier
  var piece    = get_random_element(pieces);
  piece_output = "<b>Piece: </b>" + piece;
  var study    = get_random_element(studies);
  study_output = "<b>Study: </b>" + study;

  return "<p>" + scale_output    + "</p>" +
         "<p>" + arpeggio_output + "</p>" +
         "<p>" + piece_output    + "</p>" +
         "<p>" + study_output    + "</p>";
}

</script>