const posts = [
    {title : 'post one' , name : 'this is post one'} ,
    {title : 'post two' , name : 'this is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post , index)=>{
            output+=`<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;
    } , 1000);
}

function createPost(post , callbacks){
    setTimeout(()=>{
        posts.push(post);
        callbacks();
    } , 2000);
}
//getPosts();
createPost({title : 'post three' , name : 'this is post three'} , getPosts);