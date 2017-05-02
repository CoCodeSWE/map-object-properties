function mapProperties(object, map)
{
  let new_obj = {};
  for(let i in object)
  {
    let key = map[i] ? map[i] : i;  // calcolo il valore della nuova key che, nel caso in cui non esista una mappatura, sarà uguale alla vecchia
    new_obj[key] = object[i];  // assegno il valore che aveva obj[i] con la vecchia key a new_obj[key] con la nuova key.
  }
  return new_obj;
};

module.exports = mapProperties;
