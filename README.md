# okke

(｀･ω･´)b

Type-safe validation with Branded types and precisely inferred error types

## Usage

```typescript
import v from 'okke';
import { object } from 'okke/obj';
import { max, min, nonEmpty, str } from 'okke/str';

declare const atLeast5: unique symbol;
type AtLeast5 = v.Brand<typeof atLeast5>;

declare const atMost15: unique symbol;
type AtMost15 = v.Brand<typeof atMost15>;

declare const atMost140: unique symbol;
type AtMost140 = v.Brand<typeof atMost140>;

const va = object({
    username: str.pipe(v.and(min<AtLeast5>(5), max<AtMost15>(15))),
    description: str.pipe(max<AtMost140>(140)),
});

type MyObj = v.infer<typeof va>;
// type MyObj =
//     {
//         username: string & AtLeast5 & AtMost15;
//         description: string & AtMost140;
//     }

const res = va.validate({ username: 'my_account', description: '' }); // valid

if (res.success) {
    const myObj: MyObj = res.value;
    console.log('valid:', myObj);
} else {
    // res.error:
    //     | "object.invalid_type"
    //     | {
    //           username:
    //               | "object.missing_field"
    //               | "string.invalid_type"
    //               | "string.too_short"
    //               | "string.too_long"
    //               | ("string.too_short" | "string.too_long")[];
    //           description:
    //               | "object.missing_field"
    //               | "string.invalid_type"
    //               | "string.too_long";
    //       }

    console.log('invalid:', res.error);
}

console.log(va.validate(42));
// => {
//   success: false,
//   error: "object.invalid_type",
// }

console.log(va.validate({}));
// => {
//   success: false,
//   error: {
//     username: "object.missing_field",
//     description: "object.missing_field",
//   },
// }

console.log(va.validate({ username: 'test' }));
// => {
//   success: false,
//   error: {
//     username: "string.too_short",
//     description: "object.missing_field",
//   },
// }
```

## Development

### Requirements

- [Bun](https://bun.sh)

### Install dependencies

```bash
bun install
```
