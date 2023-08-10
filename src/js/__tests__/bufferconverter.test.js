import getBuffer from '../getbuffer';
import ArrayBufferConverter from '../bufferconverter';

test('load', () => {
  const arrayBuffer = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrayBuffer.load(buffer);
  expect(arrayBuffer.bufferContainer).toBeInstanceOf(Uint16Array);
});

test('toString', () => {
  const dataStr = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrayBuffer = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrayBuffer.load(buffer);
  expect(arrayBuffer.toString()).toBe(dataStr);
});
