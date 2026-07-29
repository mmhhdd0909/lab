*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Cairo',sans-serif;
}

body{
    background:#f5f7fa;
    color:#222;
}

header{
    background:#0d2b45;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 8%;
    position:sticky;
    top:0;
    z-index:999;
}

.logo{
    font-size:28px;
    font-weight:800;
}

nav a{
    color:white;
    text-decoration:none;
    margin-right:22px;
    transition:.3s;
}

nav a:hover{
    color:#f7b500;
}

.hero{
    height:90vh;
    background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80");
    background-size:cover;
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
    padding:20px;
}

.hero h1{
    font-size:55px;
    margin-bottom:20px;
}

.hero p{
    max-width:850px;
    font-size:22px;
    line-height:2;
}

.hero button{
    margin-top:35px;
    padding:15px 45px;
    border:none;
    border-radius:40px;
    background:#f7b500;
    color:#111;
    font-size:18px;
    cursor:pointer;
    transition:.3s;
}

.hero button:hover{
    transform:scale(1.05);
}

.cards{
    width:90%;
    margin:70px auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:25px;
}

.card{
    background:white;
    border-radius:18px;
    padding:35px;
    text-align:center;
    box-shadow:0 8px 25px rgba(0,0,0,.08);
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.card h2{
    color:#0d2b45;
    margin-bottom:15px;
}

.card p{
    line-height:1.8;
}

footer{
    background:#0d2b45;
    color:white;
    text-align:center;
    padding:25px;
    margin-top:60px;
}

@media(max-width:768px){

header{
    flex-direction:column;
}

nav{
    margin-top:15px;
}

nav a{
    display:inline-block;
    margin:8px;
}

.hero h1{
    font-size:34px;
}

.hero p{
    font-size:18px;
}

}
