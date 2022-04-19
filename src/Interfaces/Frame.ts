import { z } from 'zod';

const FrameSchema = z.object({
  material: z.string({
    required_error: 'Material is required.', // Mensagem lançada quando o campo 'material' não for informado no body da requisição.
    invalid_type_error: 'Material must be a string.', // Mensagem lançada quando o campo 'material', informado no body da requisição, não for do tipo String.
  }),
  color: z.string({
    required_error: 'Color is required.',
    invalid_type_error: 'Color must be a string.',
  }).min(3, { message: 'Color must have 3 or more characters.' }),
});

type Frame = z.infer<typeof FrameSchema>; // Criando, de forma explicita, um novo tipo. É como se tivéssemos criados uma interface "Frame", com os atributos "material" e "color".

export default Frame;
export { FrameSchema };
