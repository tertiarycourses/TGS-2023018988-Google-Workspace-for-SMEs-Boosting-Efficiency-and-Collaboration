/** @OnlyCurrentDoc */
function onEdit(e) {
  if (!e || !e.range) return;
  const r=e.range, s=r.getSheet();
  if (s.getName()!=="Content Register") return;
  if (r.getColumn()!==3 || r.getRow()<2) return;
  if(r.getNumRows()!==1 || r.getNumColumns()!==1)return;
  s.getRange(r.getRow(),5).setValue(new Date());
}
