function Children  ({title, content, sum})  {
    const result = sum(12)
    return(
        <>
        <div>
            <h1 className="tituloProps">{title}</h1>
            <p>{content}</p>
            <p>El resultado es : {result}</p>
        </div>
        </>
    )
}
export default Children