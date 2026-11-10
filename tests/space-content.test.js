import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import { destinations, crew, technology, missionFacts } from "../src/features/space/data/spaceData.js";
import { NAVIGATION, getPageLabel } from "../src/lib/navigation.js";

const root = cwd();

test("all content collections have unique, stable identifiers", () => {
  for (const collection of [destinations, crew, technology]) {
    const ids = collection.map((item) => item.id);
    assert.equal(new Set(ids).size, ids.length);
    assert.ok(ids.every(Boolean));
  }
});

test("all destination records contain descriptive content and metrics", () => {
  assert.equal(destinations.length, 4);
  for (const destination of destinations) {
    assert.ok(destination.name.length > 2);
    assert.ok(destination.description.length > 60);
    assert.ok(destination.distance);
    assert.ok(destination.travelTime);
    assert.equal(destination.highlights.length, 3);
  }
});

test("all crew profiles contain role, biography and mission information", () => {
  assert.equal(crew.length, 4);
  for (const person of crew) {
    assert.ok(person.role);
    assert.ok(person.name);
    assert.ok(person.description.length > 60);
    assert.ok(person.specialty);
    assert.ok(person.mission);
  }
});

test("all referenced image assets exist in the public directory", () => {
  const records = [...destinations, ...crew, ...technology];
  for (const record of records) {
    assert.ok(existsSync(join(root, "public", "images", record.image)), `Missing image: ${record.image}`);
  }
  for (const image of ["home/Desktop - Home.webp", "destination/background-destination.webp", "crew/background-crew-desktop.webp", "technology/background-technology-desktop.webp"]) {
    assert.ok(existsSync(join(root, "public", "images", image)), `Missing background: ${image}`);
  }
});

test("navigation contains the four main sections and resolves legacy paths", () => {
  assert.equal(NAVIGATION.length, 4);
  assert.equal(getPageLabel("/"), "Home");
  assert.equal(getPageLabel("/destination/"), "Destination");
  assert.equal(getPageLabel("/Crew"), "Crew");
  assert.equal(getPageLabel("/technology"), "Technology");
  assert.equal(getPageLabel("/not-found"), "Not found");
});

test("mission facts align with the content collections", () => {
  assert.equal(Number(missionFacts[0].value), destinations.length);
  assert.equal(Number(missionFacts[1].value), crew.length);
  assert.equal(Number(missionFacts[2].value), technology.length);
});
