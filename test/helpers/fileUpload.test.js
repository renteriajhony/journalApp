import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dtogemmt6',
  api_key: '428643912226441',
  api_secret: 'z-TQHls4XVn1-0agm7BxBEgKtWE',
  secure: true,
});
describe('Test file fileUpload', () => {
  test('Should upload file to cloudinary', async () => {
    const imageUrl =
      'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/240006948_240132778113255_6075286393182995251_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFmxhJzIfAWQWJRcGxyGfnrJlkLTyHPb3kmWQtPIc9veT4hToAtYf4brnl6E9hr_Hc&_nc_ohc=rMV49ChG-s0Q7kNvgGVt3lk&_nc_ht=scontent.fclo1-4.fna&oh=00_AYDf4h2t19IOQleX6PC1gLPY_7QBfQya6LRoWUMHwq8CPQ&oe=66B8BBE3';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');
    const url = await fileUpload(file);
    expect(url).toContain('https://');

    const segment = url.split('/');
    const segmentId = segment[segment.length - 1].replace('.jpg', '');
    const respCloudinary = await cloudinary.api.delete_resources([
      'journal-app/' + segmentId,
    ]);
    console.log(respCloudinary);
  });

  test('Should return null if no file is provided', async () => {
    const url = await fileUpload();
    expect(url).toBeNull();
  });

  test('Should throw an error if the upload fails', async () => {
    const file = new File([], 'foto.jpg');
    await expect(fileUpload(file)).rejects.toThrowError();
  });
});
