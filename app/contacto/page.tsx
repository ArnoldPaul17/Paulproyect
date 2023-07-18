import './contacto.css'

export default function Contacto () {
    return (
        <>
            <h1>Estas en contacto</h1>

            <form action="" method="" className='formulario'>
                <label>
                    Nombre:
                    <input type="text" />
                </label>
                <label>
                    Mail:
                    <input type="email" />
                </label>
                <label>
                    Comentarios:
                    <textarea></textarea>
                </label>

                {/*<input type="submit" value="Enviar" />*/}
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}