import { z } from 'zod';

const FrameSchema = z.object({
  material: z.string(),
  color: z.string({
    required_error: 'Color is required', // Mensagem lançada quando o campo 'color' não for informado no body da requisição.
    invalid_type_error: 'Color must be a string', // Mensagem lançada quando o campo 'color', informado no body da requisição, não for do tipo String.
  }).min(3, { message: 'Color must be 3 or more characters long' }), // Mensagem lançada quando o campo 'color', informado no body da requisição, tiver menos de 3 caracteres.
});

type Frame = z.infer<typeof FrameSchema>; // Criando, de forma explicita, um novo tipo. É como se tivéssemos criados uma interface "Frame", com os atributos "material" e "color".

export default Frame;
export { FrameSchema };
