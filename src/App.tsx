
import './App.css'

function App() {
  const ar=[12,2,4,5,7,95,34];
  var br=[23,65,45,98,54];
  const cr=['https://tse3.explicit.bing.net/th?id=OIP.WawgWlSr4JKPhreCGd_0aAHaLL&pid=Api&P=0&h=180','https://tse4.mm.bing.net/th?id=OIP.6xh91LsZ0IRQI1dUvjnzqAHaFj&pid=Api&P=0&h=180','https://tse1.mm.bing.net/th?id=OIP.UlKhZIoU2byJj8gahSiLJQHaFj&pid=Api&P=0&h=180']
  const obj = {
    firstname:"Kapuluru",
    lastname:"Resh",
    age:21
  }
  const students = [
    {
      firstname:"Praveen",
      lastname:"Gubbala",
      age:40
    },
    {
      firstname:"Rohit",
      lastname:"Sharma",
      age:35
    },
    {
      firstname:"Sachin",
      lastname:"Tendulkar",
      age:50
    },
]
  return (
    <>
      <div>{ar.flat()}</div>
      {
        br.map((a)=>{
          return (a%2===0?<li><i>{a}</i></li>:<li><b>{a}</b></li>)
        })
      }
      {
        ar.map((a)=>{
          return (a<25?<li>{a}</li>:null)
        })
      }
      {
        br.reduce((a,b)=>{
          return a+b
        },0)
      }
      <br></br>
      {
        cr.map((a)=>{
          return <img src={a}/>
        })
      }
      {
        cr.map((a)=>{
          return <li><img src={a}/></li>
        })
      }
      {
         cr.map((a)=>{
          return <td><img src={a}/></td>
        })
      }
      {
        Object.entries(obj).map((a)=>{
          return <li>{a[0]}:{a[1]}</li>
        })
      }
      {
        Object.entries(obj).map((a)=>{
          return <li>{a[0].toUpperCase()}:{a[1]}</li>
        })
      }
      {
        students.map((a)=>{
          return Object.entries(a).map((k)=>{
            return <li>{k[0]}:{k[1]}</li>
          })
        })
      }
      <table>
        <tr>
          {
            students.map((a)=>{
              return
            })
          }
        </tr>
      </table>

    </>
  )
}

export default App
