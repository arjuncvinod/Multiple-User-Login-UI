let li = document.getElementsByTagName("button");

for(let i=0; i < li.length; i++)
{
  li[i].onclick = e=>{
      let n=0;
      while(n < li.length)
      {
          li[n++].className = '';
      }
      e.target.className = 'active'
  }
}
$('button').click(function(){
  $(this).addClass('active').sibling().removeClass('active');
})